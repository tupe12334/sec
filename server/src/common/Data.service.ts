import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import axios from 'axios';
import Bottleneck from 'bottleneck';
import type { RequestType } from 'src/types';

// SEC's fair access policy caps automated traffic at 10 requests/second
// (https://www.sec.gov/os/webmaster-faq#developers). Stay comfortably under
// that by serializing outbound fetches with a minimum gap between them.
const SEC_MIN_REQUEST_INTERVAL_MS = 150;
const secRequestLimiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: SEC_MIN_REQUEST_INTERVAL_MS,
});

async function rateLimitedFetch(secUrl: string) {
  return secRequestLimiter.schedule(async () =>
    axios.get(secUrl, {
      headers: {
        'User-Agent': 'MyExpressApp/1.0',
      },
    }),
  );
}

export async function findUnique(dataType: RequestType, cik: string) {
  const fileName = `CIK${cik}.json`;
  const filePath = join(__dirname, '..', '..', 'data', dataType, fileName);
  console.log(`filePath: ${filePath}`);

  try {
    const fileData = await readFile(filePath, 'utf-8');
    console.log(`Loaded local ${dataType} data for CIK ${cik}`);
    return fileData;
  } catch {
    console.log(`Local file missing for ${cik}, fetching from SEC API...`);
    const secUrl = `https://data.sec.gov/api/${dataType}/${fileName}`;

    try {
      const response = await rateLimitedFetch(secUrl);
      const data = response.data;
      await mkdir(dirname(filePath), { recursive: true });
      await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
      console.log(`Fetched and cached ${dataType} data for CIK ${cik}`);
      return data;
    } catch (error: any) {
      throw new Error(`SEC API request failed: ${error.message}`);
    }
  }
}
