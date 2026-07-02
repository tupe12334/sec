import axios from 'axios';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { findUnique } from './Data.service';

jest.mock('axios');
jest.mock('fs/promises');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedReadFile = readFile as jest.MockedFunction<typeof readFile>;
const mockedWriteFile = writeFile as jest.MockedFunction<typeof writeFile>;
const mockedMkdir = mkdir as jest.MockedFunction<typeof mkdir>;

describe('findUnique', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedReadFile.mockRejectedValue(new Error('ENOENT'));
    mockedWriteFile.mockResolvedValue(undefined);
    mockedMkdir.mockResolvedValue(undefined);
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: { ok: true } }),
    );
  });

  it('spaces out concurrent SEC API requests to respect the rate limit', async () => {
    const callTimestamps: number[] = [];
    mockedAxios.get.mockImplementation(() => {
      callTimestamps.push(Date.now());
      return Promise.resolve({ data: { ok: true } });
    });

    await Promise.all([
      findUnique('companyfacts', '0000000001'),
      findUnique('companyfacts', '0000000002'),
      findUnique('companyfacts', '0000000003'),
    ]);

    expect(mockedAxios.get).toHaveBeenCalledTimes(3);
    expect(callTimestamps).toHaveLength(3);
    for (let i = 1; i < callTimestamps.length; i++) {
      expect(callTimestamps[i] - callTimestamps[i - 1]).toBeGreaterThanOrEqual(
        140,
      );
    }
  });

  it('still returns fetched data and caches it to disk', async () => {
    const data = await findUnique('submissions', '0000000042');

    expect(data).toEqual({ ok: true });
    expect(mockedWriteFile).toHaveBeenCalledWith(
      expect.stringContaining('CIK0000000042.json'),
      JSON.stringify({ ok: true }, null, 2),
      'utf-8',
    );
  });
});
