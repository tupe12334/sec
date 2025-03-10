/* tslint:disable */
/* eslint-disable */
/**
 * Security and exchange commission\'s API
 * This is an API to run a local cache of the Security and exchange commission\'s API to prevent rate limiting and to provide a more stable and reliable API for the users
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface CompanyfactsDto
 */
export interface CompanyfactsDto {
    /**
     * 
     * @type {number}
     * @memberof CompanyfactsDto
     */
    'cik': number;
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDto
     */
    'entityName': string;
    /**
     * 
     * @type {CompanyfactsDtoFacts}
     * @memberof CompanyfactsDto
     */
    'facts': CompanyfactsDtoFacts;
}
/**
 * 
 * @export
 * @interface CompanyfactsDtoFacts
 */
export interface CompanyfactsDtoFacts {
    /**
     * 
     * @type {CompanyfactsDtoFactsDei}
     * @memberof CompanyfactsDtoFacts
     */
    'dei': CompanyfactsDtoFactsDei;
    /**
     * 
     * @type {CompanyfactsDtoFactsUsGaap}
     * @memberof CompanyfactsDtoFacts
     */
    'us-gaap': CompanyfactsDtoFactsUsGaap;
}
/**
 * 
 * @export
 * @interface CompanyfactsDtoFactsDei
 */
export interface CompanyfactsDtoFactsDei {
    /**
     * 
     * @type {CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstanding}
     * @memberof CompanyfactsDtoFactsDei
     */
    'EntityCommonStockSharesOutstanding': CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstanding;
    /**
     * 
     * @type {CompanyfactsDtoFactsDeiEntityPublicFloat}
     * @memberof CompanyfactsDtoFactsDei
     */
    'EntityPublicFloat': CompanyfactsDtoFactsDeiEntityPublicFloat;
}
/**
 * Indicate number of shares or other units outstanding of each of registrant\'s classes of capital or common stock or other ownership interests, if and as stated on cover of related periodic report. Where multiple classes or units exist define each class/interest by adding class of stock items such as Common Class A [Member], Common Class B [Member] or Partnership Interest [Member] onto the Instrument [Domain] of the Entity Listings, Instrument.
 * @export
 * @interface CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstanding
 */
export interface CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstanding {
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstanding
     */
    'label': string;
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstanding
     */
    'description': string;
    /**
     * 
     * @type {CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnits}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstanding
     */
    'units': CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnits;
}
/**
 * 
 * @export
 * @interface CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnits
 */
export interface CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnits {
    /**
     * 
     * @type {Array<CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner>}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnits
     */
    'shares': Array<CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner>;
}
/**
 * 
 * @export
 * @interface CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner
 */
export interface CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner {
    /**
     * YYYY-MM-DD
     * @type {string}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner
     */
    'end': string;
    /**
     * 
     * @type {number}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner
     */
    'val': number;
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner
     */
    'accn': string;
    /**
     * Fiscal year
     * @type {number}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner
     */
    'fy': number;
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner
     */
    'fp': CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInnerFpEnum;
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner
     */
    'form': string;
    /**
     * YYYY-MM-DD
     * @type {string}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner
     */
    'filed': string;
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner
     */
    'frame': string;
}

export const CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInnerFpEnum = {
    Q1: 'Q1',
    Q2: 'Q2',
    Q3: 'Q3',
    Q4: 'Q4'
} as const;

export type CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInnerFpEnum = typeof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInnerFpEnum[keyof typeof CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInnerFpEnum];

/**
 * The aggregate market value of the voting and non-voting common equity held by non-affiliates computed by reference to the price at which the common equity was last sold, or the average bid and asked price of such common equity, as of the last business day of the registrant\'s most recently completed second fiscal quarter.
 * @export
 * @interface CompanyfactsDtoFactsDeiEntityPublicFloat
 */
export interface CompanyfactsDtoFactsDeiEntityPublicFloat {
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsDeiEntityPublicFloat
     */
    'label': string;
    /**
     * 
     * @type {CompanyfactsDtoFactsDeiEntityPublicFloatUnits}
     * @memberof CompanyfactsDtoFactsDeiEntityPublicFloat
     */
    'units': CompanyfactsDtoFactsDeiEntityPublicFloatUnits;
}
/**
 * 
 * @export
 * @interface CompanyfactsDtoFactsDeiEntityPublicFloatUnits
 */
export interface CompanyfactsDtoFactsDeiEntityPublicFloatUnits {
    /**
     * 
     * @type {Array<CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner>}
     * @memberof CompanyfactsDtoFactsDeiEntityPublicFloatUnits
     */
    'USD': Array<CompanyfactsDtoFactsDeiEntityCommonStockSharesOutstandingUnitsSharesInner>;
}
/**
 * 
 * @export
 * @interface CompanyfactsDtoFactsUsGaap
 */
export interface CompanyfactsDtoFactsUsGaap {
    /**
     * 
     * @type {CompanyfactsDtoFactsUsGaapAccountsAndNotesReceivableNet}
     * @memberof CompanyfactsDtoFactsUsGaap
     */
    'AccountsAndNotesReceivableNet': CompanyfactsDtoFactsUsGaapAccountsAndNotesReceivableNet;
    /**
     * 
     * @type {CompanyfactsDtoFactsUsGaapAccountsPayableCurrent}
     * @memberof CompanyfactsDtoFactsUsGaap
     */
    'AccountsPayableCurrent': CompanyfactsDtoFactsUsGaapAccountsPayableCurrent;
    /**
     * 
     * @type {CompanyfactsDtoFactsUsGaapAccountsReceivableGrossCurrent}
     * @memberof CompanyfactsDtoFactsUsGaap
     */
    'AccountsReceivableGrossCurrent': CompanyfactsDtoFactsUsGaapAccountsReceivableGrossCurrent;
    /**
     * 
     * @type {CompanyfactsDtoFactsUsGaapAccountsReceivableNetCurrent}
     * @memberof CompanyfactsDtoFactsUsGaap
     */
    'AccountsReceivableNetCurrent': CompanyfactsDtoFactsUsGaapAccountsReceivableNetCurrent;
    /**
     * 
     * @type {CompanyfactsDtoFactsUsGaapAccruedLiabilitiesCurrent}
     * @memberof CompanyfactsDtoFactsUsGaap
     */
    'AccruedLiabilitiesCurrent': CompanyfactsDtoFactsUsGaapAccruedLiabilitiesCurrent;
    /**
     * 
     * @type {CompanyfactsDtoFactsUsGaapAccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment}
     * @memberof CompanyfactsDtoFactsUsGaap
     */
    'AccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment': CompanyfactsDtoFactsUsGaapAccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment;
    /**
     * 
     * @type {CompanyfactsDtoFactsUsGaapAccumulatedOtherComprehensiveIncomeLossNetOfTax}
     * @memberof CompanyfactsDtoFactsUsGaap
     */
    'AccumulatedOtherComprehensiveIncomeLossNetOfTax': CompanyfactsDtoFactsUsGaapAccumulatedOtherComprehensiveIncomeLossNetOfTax;
}
/**
 * Amount, after allowance for credit loss, of accounts and financing receivable. Includes, but is not limited to, notes and loan receivable.
 * @export
 * @interface CompanyfactsDtoFactsUsGaapAccountsAndNotesReceivableNet
 */
export interface CompanyfactsDtoFactsUsGaapAccountsAndNotesReceivableNet {
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsUsGaapAccountsAndNotesReceivableNet
     */
    'label': string;
    /**
     * 
     * @type {CompanyfactsDtoFactsDeiEntityPublicFloatUnits}
     * @memberof CompanyfactsDtoFactsUsGaapAccountsAndNotesReceivableNet
     */
    'units': CompanyfactsDtoFactsDeiEntityPublicFloatUnits;
}
/**
 * Carrying value as of the balance sheet date of liabilities incurred (and for which invoices have typically been received) and payable to vendors for goods and services received that are used in an entity\'s business. Used to reflect the current portion of the liabilities (due within one year or within the normal operating cycle if longer).
 * @export
 * @interface CompanyfactsDtoFactsUsGaapAccountsPayableCurrent
 */
export interface CompanyfactsDtoFactsUsGaapAccountsPayableCurrent {
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsUsGaapAccountsPayableCurrent
     */
    'label': string;
    /**
     * 
     * @type {CompanyfactsDtoFactsDeiEntityPublicFloatUnits}
     * @memberof CompanyfactsDtoFactsUsGaapAccountsPayableCurrent
     */
    'units': CompanyfactsDtoFactsDeiEntityPublicFloatUnits;
}
/**
 * Amount, before allowance for credit loss, of right to consideration from customer for product sold and service rendered in normal course of business, classified as current.
 * @export
 * @interface CompanyfactsDtoFactsUsGaapAccountsReceivableGrossCurrent
 */
export interface CompanyfactsDtoFactsUsGaapAccountsReceivableGrossCurrent {
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsUsGaapAccountsReceivableGrossCurrent
     */
    'label': string;
    /**
     * 
     * @type {CompanyfactsDtoFactsDeiEntityPublicFloatUnits}
     * @memberof CompanyfactsDtoFactsUsGaapAccountsReceivableGrossCurrent
     */
    'units': CompanyfactsDtoFactsDeiEntityPublicFloatUnits;
}
/**
 * Amount, after allowance for credit loss, of right to consideration from customer for product sold and service rendered in normal course of business, classified as current.
 * @export
 * @interface CompanyfactsDtoFactsUsGaapAccountsReceivableNetCurrent
 */
export interface CompanyfactsDtoFactsUsGaapAccountsReceivableNetCurrent {
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsUsGaapAccountsReceivableNetCurrent
     */
    'label': string;
    /**
     * 
     * @type {CompanyfactsDtoFactsDeiEntityPublicFloatUnits}
     * @memberof CompanyfactsDtoFactsUsGaapAccountsReceivableNetCurrent
     */
    'units': CompanyfactsDtoFactsDeiEntityPublicFloatUnits;
}
/**
 * Carrying value as of the balance sheet date of obligations incurred and payable, pertaining to costs that are statutory in nature, are incurred on contractual obligations, or accumulate over time and for which invoices have not yet been received or will not be rendered. Examples include taxes, interest, rent and utilities. Used to reflect the current portion of the liabilities (due within one year or within the normal operating cycle if longer).
 * @export
 * @interface CompanyfactsDtoFactsUsGaapAccruedLiabilitiesCurrent
 */
export interface CompanyfactsDtoFactsUsGaapAccruedLiabilitiesCurrent {
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsUsGaapAccruedLiabilitiesCurrent
     */
    'label': string;
    /**
     * 
     * @type {CompanyfactsDtoFactsDeiEntityPublicFloatUnits}
     * @memberof CompanyfactsDtoFactsUsGaapAccruedLiabilitiesCurrent
     */
    'units': CompanyfactsDtoFactsDeiEntityPublicFloatUnits;
}
/**
 * Amount of accumulated depreciation, depletion and amortization for physical assets used in the normal conduct of business to produce goods and services.
 * @export
 * @interface CompanyfactsDtoFactsUsGaapAccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment
 */
export interface CompanyfactsDtoFactsUsGaapAccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment {
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsUsGaapAccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment
     */
    'label': string;
    /**
     * 
     * @type {CompanyfactsDtoFactsDeiEntityPublicFloatUnits}
     * @memberof CompanyfactsDtoFactsUsGaapAccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment
     */
    'units': CompanyfactsDtoFactsDeiEntityPublicFloatUnits;
}
/**
 * Accumulated change in equity from transactions and other events and circumstances from non-owner sources, net of tax effect, at period end. Excludes Net Income (Loss), and accumulated changes in equity from transactions resulting from investments by owners and distributions to owners. Includes foreign currency translation items, certain pension adjustments, unrealized gains and losses on certain investments in debt and equity securities, other than temporary impairment (OTTI) losses related to factors other than credit losses on available-for-sale and held-to-maturity debt securities that an entity does not intend to sell and it is not more likely than not that the entity will be required to sell before recovery of the amortized cost basis, as well as changes in the fair value of derivatives related to the effective portion of a designated cash flow hedge.
 * @export
 * @interface CompanyfactsDtoFactsUsGaapAccumulatedOtherComprehensiveIncomeLossNetOfTax
 */
export interface CompanyfactsDtoFactsUsGaapAccumulatedOtherComprehensiveIncomeLossNetOfTax {
    /**
     * 
     * @type {string}
     * @memberof CompanyfactsDtoFactsUsGaapAccumulatedOtherComprehensiveIncomeLossNetOfTax
     */
    'label': string;
    /**
     * 
     * @type {CompanyfactsDtoFactsDeiEntityPublicFloatUnits}
     * @memberof CompanyfactsDtoFactsUsGaapAccumulatedOtherComprehensiveIncomeLossNetOfTax
     */
    'units': CompanyfactsDtoFactsDeiEntityPublicFloatUnits;
}
/**
 * 
 * @export
 * @interface SubmissionDto
 */
export interface SubmissionDto {
    /**
     * 
     * @type {string}
     * @memberof SubmissionDto
     */
    'cik': string;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDto
     */
    'sic': string;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDto
     */
    'name': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SubmissionDto
     */
    'tickers': Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SubmissionDto
     */
    'exchanges': Array<string>;
    /**
     * Employer Identification Number
     * @type {string}
     * @memberof SubmissionDto
     */
    'ein': string;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDto
     */
    'website'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDto
     */
    'fiscalYearEnd': string;
}

/**
 * CompanyfactsApi - axios parameter creator
 * @export
 */
export const CompanyfactsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} cik 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        companyfactsControllerFindUnique: async (cik: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cik' is not null or undefined
            assertParamExists('companyfactsControllerFindUnique', 'cik', cik)
            const localVarPath = `/companyfacts/{cik}`
                .replace(`{${"cik"}}`, encodeURIComponent(String(cik)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CompanyfactsApi - functional programming interface
 * @export
 */
export const CompanyfactsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CompanyfactsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} cik 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async companyfactsControllerFindUnique(cik: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompanyfactsDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.companyfactsControllerFindUnique(cik, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CompanyfactsApi.companyfactsControllerFindUnique']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CompanyfactsApi - factory interface
 * @export
 */
export const CompanyfactsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CompanyfactsApiFp(configuration)
    return {
        /**
         * 
         * @param {string} cik 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        companyfactsControllerFindUnique(cik: string, options?: RawAxiosRequestConfig): AxiosPromise<CompanyfactsDto> {
            return localVarFp.companyfactsControllerFindUnique(cik, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CompanyfactsApi - object-oriented interface
 * @export
 * @class CompanyfactsApi
 * @extends {BaseAPI}
 */
export class CompanyfactsApi extends BaseAPI {
    /**
     * 
     * @param {string} cik 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyfactsApi
     */
    public companyfactsControllerFindUnique(cik: string, options?: RawAxiosRequestConfig) {
        return CompanyfactsApiFp(this.configuration).companyfactsControllerFindUnique(cik, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * SubmissionsApi - axios parameter creator
 * @export
 */
export const SubmissionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} cik 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submissionsControllerFindUnique: async (cik: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cik' is not null or undefined
            assertParamExists('submissionsControllerFindUnique', 'cik', cik)
            const localVarPath = `/submissions/{cik}`
                .replace(`{${"cik"}}`, encodeURIComponent(String(cik)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SubmissionsApi - functional programming interface
 * @export
 */
export const SubmissionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SubmissionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} cik 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submissionsControllerFindUnique(cik: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubmissionDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submissionsControllerFindUnique(cik, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SubmissionsApi.submissionsControllerFindUnique']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SubmissionsApi - factory interface
 * @export
 */
export const SubmissionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SubmissionsApiFp(configuration)
    return {
        /**
         * 
         * @param {string} cik 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submissionsControllerFindUnique(cik: string, options?: RawAxiosRequestConfig): AxiosPromise<SubmissionDto> {
            return localVarFp.submissionsControllerFindUnique(cik, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SubmissionsApi - object-oriented interface
 * @export
 * @class SubmissionsApi
 * @extends {BaseAPI}
 */
export class SubmissionsApi extends BaseAPI {
    /**
     * 
     * @param {string} cik 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubmissionsApi
     */
    public submissionsControllerFindUnique(cik: string, options?: RawAxiosRequestConfig) {
        return SubmissionsApiFp(this.configuration).submissionsControllerFindUnique(cik, options).then((request) => request(this.axios, this.basePath));
    }
}



