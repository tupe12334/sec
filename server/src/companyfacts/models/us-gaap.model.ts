import { z } from 'zod';
import { Units_usdSchema } from './Units_usd.model';

export const us_gaap = z.object({
  AccountsAndNotesReceivableNet: Units_usdSchema.describe(
    'Amount, after allowance for credit loss, of accounts and financing receivable. Includes, but is not limited to, notes and loan receivable.',
  ),
  AccountsPayableCurrent: Units_usdSchema.describe(
    "Carrying value as of the balance sheet date of liabilities incurred (and for which invoices have typically been received) and payable to vendors for goods and services received that are used in an entity's business. Used to reflect the current portion of the liabilities (due within one year or within the normal operating cycle if longer).",
  ),
  AccountsReceivableGrossCurrent: Units_usdSchema.describe(
    'Amount, before allowance for credit loss, of right to consideration from customer for product sold and service rendered in normal course of business, classified as current.',
  ),
  AccountsReceivableNetCurrent: Units_usdSchema.describe(
    'Amount, after allowance for credit loss, of right to consideration from customer for product sold and service rendered in normal course of business, classified as current.',
  ),

  AccruedLiabilitiesCurrent: Units_usdSchema.describe(
    'Carrying value as of the balance sheet date of obligations incurred and payable, pertaining to costs that are statutory in nature, are incurred on contractual obligations, or accumulate over time and for which invoices have not yet been received or will not be rendered. Examples include taxes, interest, rent and utilities. Used to reflect the current portion of the liabilities (due within one year or within the normal operating cycle if longer).',
  ),
  AccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment:
    Units_usdSchema.describe(
      'Amount of accumulated depreciation, depletion and amortization for physical assets used in the normal conduct of business to produce goods and services.',
    ),
  AccumulatedOtherComprehensiveIncomeLossNetOfTax: Units_usdSchema.describe(
    'Accumulated change in equity from transactions and other events and circumstances from non-owner sources, net of tax effect, at period end. Excludes Net Income (Loss), and accumulated changes in equity from transactions resulting from investments by owners and distributions to owners. Includes foreign currency translation items, certain pension adjustments, unrealized gains and losses on certain investments in debt and equity securities, other than temporary impairment (OTTI) losses related to factors other than credit losses on available-for-sale and held-to-maturity debt securities that an entity does not intend to sell and it is not more likely than not that the entity will be required to sell before recovery of the amortized cost basis, as well as changes in the fair value of derivatives related to the effective portion of a designated cash flow hedge.',
  ),
});
