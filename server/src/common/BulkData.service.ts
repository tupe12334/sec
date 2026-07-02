import axios from 'axios';
import { createWriteStream } from 'fs';
import { mkdir, readdir, rm } from 'fs/promises';
import { join } from 'path';
import { Open } from 'unzipper';
import { RequestType } from 'src/types';

// SEC publishes the entire submissions/companyfacts datasets as bulk zips
// (each file inside is named `CIK##########.json`, same as the per-CIK
// fetch in Data.service.ts). Downloading + extracting them into the same
// `data/<dataType>` directory on boot seeds the local cache so lookups are
// served from disk instead of hitting data.sec.gov one CIK at a time.
const BULK_DATA_URLS: Record<RequestType, string> = {
  submissions:
    'https://www.sec.gov/Archives/edgar/daily-index/bulkdata/submissions.zip',
  companyfacts:
    'https://www.sec.gov/Archives/edgar/daily-index/xbrl/companyfacts.zip',
};

async function isEmptyDir(dir: string): Promise<boolean> {
  try {
    const entries = await readdir(dir);
    return entries.length === 0;
  } catch {
    return true; // doesn't exist yet
  }
}

async function downloadAndExtract(dataType: RequestType): Promise<void> {
  const destDir = join(__dirname, '..', '..', 'data', dataType);

  // ponytail: these zips are ~1.5GB each, so only fetch them when the data
  // dir is empty rather than on every boot. Clear the dir to force a refresh.
  if (!(await isEmptyDir(destDir))) {
    console.log(`Bulk ${dataType} data already present, skipping download`);
    return;
  }

  await mkdir(destDir, { recursive: true });
  const url = BULK_DATA_URLS[dataType];
  const tmpZipPath = join(destDir, '..', `${dataType}.zip.tmp`);

  console.log(`Downloading bulk ${dataType} data from ${url}...`);
  const response = await axios.get(url, {
    responseType: 'stream',
    headers: { 'User-Agent': 'MyExpressApp/1.0' },
  });

  await new Promise<void>((resolve, reject) => {
    const writer = createWriteStream(tmpZipPath);
    response.data.pipe(writer);
    writer.on('finish', () => resolve());
    writer.on('error', reject);
  });

  try {
    console.log(`Extracting bulk ${dataType} data into ${destDir}...`);
    const directory = await Open.file(tmpZipPath);
    await directory.extract({ path: destDir, concurrency: 5 });
    console.log(`Bulk ${dataType} data ready`);
  } finally {
    await rm(tmpZipPath, { force: true });
  }
}

/**
 * Seeds the local cache from SEC's bulk data zips. Runs in the background
 * (fire-and-forget from main.ts) so a multi-GB download doesn't delay the
 * server from listening/answering healthchecks; per-CIK requests still fall
 * back to the live SEC API (see Data.service.ts) while this is in flight.
 */
export async function downloadBulkDataOnBoot(): Promise<void> {
  for (const dataType of Object.keys(BULK_DATA_URLS) as RequestType[]) {
    try {
      await downloadAndExtract(dataType);
    } catch (err) {
      console.error(`Failed to download bulk ${dataType} data:`, err);
    }
  }
}
