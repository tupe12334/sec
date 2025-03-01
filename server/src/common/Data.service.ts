import axios from 'axios';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { RequestType } from 'src/types';

export async function findUnique(dataType: RequestType, cik: string) {
  const fileName = `CIK${cik}.json`;
  const filePath = join(__dirname, '..', '..', 'data', dataType, fileName);
  console.log(`filePath: ${filePath}`);

  try {
    const fileData = await readFile(filePath, 'utf-8');
    console.log(`Loaded local ${dataType} data for CIK ${cik}`);
    return fileData;
  } catch (readErr) {
    console.log(`Local file missing for ${cik}, fetching from SEC API...`);
    const secUrl = `https://data.sec.gov/api/${dataType}/${fileName}`;

    try {
      const response = await axios.get(secUrl, {
        headers: {
          'User-Agent': 'MyExpressApp/1.0',
        },
      });
      const data = response.data;
      await mkdir(dirname(filePath), { recursive: true });
      await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
      console.log(`Fetched and cached ${dataType} data for CIK ${cik}`);
      return data;
    } catch (apiErr: any) {
      throw new Error(`SEC API request failed: ${apiErr.message}`);
    }
  }
}
