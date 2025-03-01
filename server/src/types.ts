import { z } from 'zod';

export const RequestTypeSchema = z.enum(['submissions', 'companyfacts']);

export type RequestType = z.infer<typeof RequestTypeSchema>;

export const CIKSchema = z
  .string()
  .regex(/^\d+$/)
  .transform((cik) => cik.padStart(10, '0'));

export type CIK = z.infer<typeof CIKSchema>;
