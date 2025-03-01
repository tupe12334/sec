import { z } from 'zod';

export const YearQuartersSchema = z.enum(['Q1', 'Q2', 'Q3', 'Q4']);
export type YearQuarters = z.infer<typeof YearQuartersSchema>;
