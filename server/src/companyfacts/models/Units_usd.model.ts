import { z } from 'zod';
import { EntrySchema } from './entry.model';

export const Units_usdSchema = z.object({
  label: z.string(),
  units: z.object({
    USD: z.array(EntrySchema),
  }),
});
