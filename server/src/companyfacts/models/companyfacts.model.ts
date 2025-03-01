import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { dei } from './dei.model';
import { us_gaap } from './us-gaap.model';

export const CompanyfactsSchema = z.object({
  cik: z.number(),
  entityName: z.string(),
  facts: z.object({
    dei: dei,
    'us-gaap': us_gaap,
  }),
});
export type Companyfacts = z.infer<typeof CompanyfactsSchema>;
export class CompanyfactsDto extends createZodDto(CompanyfactsSchema) {}
