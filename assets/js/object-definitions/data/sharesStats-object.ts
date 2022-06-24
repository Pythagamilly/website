import {QueryExpression} from "../query/filter-object";

export class SharesStats {
  TickerUuid: string;
  Updated: string;
  UpdatedDate: string;
  SharesOutstanding: number;
  SharesFloat: number;
  PercentInsiders: number;
  PercentInstitutions: number;
  SharesShort: number;
  SharesShortPriorMonth: number;
  ShortRatio: number;
  ShortPercentOutstanding: number;
  ShortPercentFloat: number;
  constructor() {
  }
}

export class SharesStatsQuery {
  TickerUuid: QueryExpression;
  Updated: QueryExpression;
  UpdatedDate: QueryExpression;
  SharesOutstanding: QueryExpression;
  SharesFloat: QueryExpression;
  PercentInsiders: QueryExpression;
  PercentInstitutions: QueryExpression;
  SharesShort: QueryExpression;
  SharesShortPriorMonth: QueryExpression;
  ShortRatio: QueryExpression;
  ShortPercentOutstanding: QueryExpression;
  ShortPercentFloat: QueryExpression;
  constructor() {
  }
}