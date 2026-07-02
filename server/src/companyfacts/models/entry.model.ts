import { z } from 'zod';
import { YearQuartersSchema } from 'src/common';

export const EntrySchema = z.object({
  end: z.string().describe('YYYY-MM-DD'),
  val: z.number(),
  accn: z.string(),
  fy: z.number().describe('Fiscal year'),
  fp: YearQuartersSchema,
  form: z.string(),
  filed: z.string().describe('YYYY-MM-DD'),
  frame: z.string(),
});
