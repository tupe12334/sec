import axios from 'axios';
import { EventEmitter } from 'events';
import { createWriteStream } from 'fs';
import { mkdir, readdir, rm } from 'fs/promises';
import { Open } from 'unzipper';
import { downloadBulkDataOnBoot } from './BulkData.service';

jest.mock('axios');
jest.mock('fs');
jest.mock('fs/promises');
jest.mock('unzipper');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedReaddir = readdir as jest.MockedFunction<typeof readdir>;
const mockedMkdir = mkdir as jest.MockedFunction<typeof mkdir>;
const mockedRm = rm as jest.MockedFunction<typeof rm>;
const mockedCreateWriteStream = createWriteStream as jest.MockedFunction<
  typeof createWriteStream
>;
const mockedOpen = Open as jest.Mocked<typeof Open>;

function fakeWriter() {
  const writer = new EventEmitter() as any;
  process.nextTick(() => writer.emit('finish'));
  return writer;
}

describe('downloadBulkDataOnBoot', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedMkdir.mockResolvedValue(undefined);
    mockedRm.mockResolvedValue(undefined);
    mockedCreateWriteStream.mockImplementation(() => fakeWriter());
    mockedAxios.get.mockResolvedValue({ data: { pipe: jest.fn() } });
    mockedOpen.file.mockResolvedValue({
      extract: jest.fn().mockResolvedValue(undefined),
    } as any);
  });

  it('skips downloading a dataset whose data dir is already populated', async () => {
    mockedReaddir.mockResolvedValue(['CIK0000000001.json'] as any);

    await downloadBulkDataOnBoot();

    expect(mockedAxios.get).not.toHaveBeenCalled();
    expect(mockedOpen.file).not.toHaveBeenCalled();
  });

  it('downloads and extracts a dataset whose data dir is empty', async () => {
    mockedReaddir.mockResolvedValue([] as any);

    await downloadBulkDataOnBoot();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.stringContaining('.zip'),
      expect.objectContaining({ responseType: 'stream' }),
    );
    expect(mockedOpen.file).toHaveBeenCalled();
    expect(mockedRm).toHaveBeenCalled();
  });

  it('keeps going for the next dataset if one dataset fails', async () => {
    mockedReaddir.mockResolvedValue([] as any);
    mockedAxios.get.mockRejectedValueOnce(new Error('network down'));

    await expect(downloadBulkDataOnBoot()).resolves.toBeUndefined();

    // still attempted both datasets despite the first failing
    expect(mockedAxios.get).toHaveBeenCalledTimes(2);
  });
});
