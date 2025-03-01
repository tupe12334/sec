import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const SubmissionSchema = z.object({
  cik: z.string(),
  sic: z.string(),
  name: z.string(),
  tickers: z.array(z.string()),
  exchanges: z.array(z.string()),
  ein: z.string().describe('Employer Identification Number'),
  website: z.string().url().optional(),
  fiscalYearEnd: z.string(),
});

export type Submission = z.infer<typeof SubmissionSchema>;
export class SubmissionDto extends createZodDto(SubmissionSchema) {}
