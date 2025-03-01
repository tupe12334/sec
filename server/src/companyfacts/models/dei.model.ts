import { z } from 'zod';
import { EntrySchema } from './entry.model';
import { Units_usdSchema } from './Units_usd.model';

export const dei = z.object({
  EntityCommonStockSharesOutstanding: z
    .object({
      label: z.string(),
      description: z.string(),
      units: z.object({
        shares: z.array(EntrySchema),
      }),
    })
    .describe(
      "Indicate number of shares or other units outstanding of each of registrant's classes of capital or common stock or other ownership interests, if and as stated on cover of related periodic report. Where multiple classes or units exist define each class/interest by adding class of stock items such as Common Class A [Member], Common Class B [Member] or Partnership Interest [Member] onto the Instrument [Domain] of the Entity Listings, Instrument.",
    ),
  EntityPublicFloat: Units_usdSchema.describe(
    "The aggregate market value of the voting and non-voting common equity held by non-affiliates computed by reference to the price at which the common equity was last sold, or the average bid and asked price of such common equity, as of the last business day of the registrant's most recently completed second fiscal quarter.",
  ),
});
