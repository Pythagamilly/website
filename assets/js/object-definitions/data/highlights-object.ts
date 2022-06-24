import {QueryExpression} from "../query/filter-object";

export class Highlights {
  TickerUuid: string;
  Updated: string;
  UpdatedDate: string;
  MarketCapitalization: number;
  MarketCapitalizationMln: number;
  Ebitda: number;
  PERatio: number;
  PEGRatio: number;
  WallStreetTargetPrice: number;
  BookValue: number;
  DividendShare: number;
  DividendYield: number;
  EarningsShare: number;
  EPSEstimateCurrentYear: number;
  EPSEstimateNextYear: number;
  EPSEstimateNextQuarter: number;
  EPSEstimateCurrentQuarter: number;
  MostRecentQuarter: string;
  ProfitMargin: number;
  OperatingMarginTTM: number;
  ReturnOnAssetsTTM: number;
  ReturnOnEquityTTM: number;
  RevenueTTM: number;
  RevenuePerShareTTM: number;
  QuarterlyRevenueGrowthYOY: number;
  GrossProfitTTM: number;
  DilutedEpsTTM: number;
  QuarterlyEarningsGrowthYOY: number;

  constructor() {
  }
}

export class HighlightsQuery {
  GeneralUuid: QueryExpression;
  Updated: QueryExpression;
  UpdatedDate: QueryExpression;
  MarketCapitalization: QueryExpression;
  MarketCapitalizationMln: QueryExpression;
  Ebitda: QueryExpression;
  PERatio: QueryExpression;
  PEGRatio: QueryExpression;
  WallStreetTargetPrice: QueryExpression;
  BookValue: QueryExpression;
  DividendShare: QueryExpression;
  DividendYield: QueryExpression;
  EarningsShare: QueryExpression;
  EPSEstimateCurrentYear: QueryExpression;
  EPSEstimateNextYear: QueryExpression;
  EPSEstimateNextQuarter: QueryExpression;
  EPSEstimateCurrentQuarter: QueryExpression;
  MostRecentQuarter: QueryExpression;
  ProfitMargin: QueryExpression;
  OperatingMarginTTM: QueryExpression;
  ReturnOnAssetsTTM: QueryExpression;
  ReturnOnEquityTTM: QueryExpression;
  RevenueTTM: QueryExpression;
  RevenuePerShareTTM: QueryExpression;
  QuarterlyRevenueGrowthYOY: QueryExpression;
  GrossProfitTTM: QueryExpression;
  DilutedEpsTTM: QueryExpression;
  QuarterlyEarningsGrowthYOY: QueryExpression;

  constructor() {
  }
}