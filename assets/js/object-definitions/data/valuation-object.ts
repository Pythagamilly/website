import {QueryExpression} from "../query/filter-object";

export class Valuation {
  TickerUuid: string;
  Updated: string;
  UpdatedDate: string;
  TrailingPE: number;
  ForwardPE: number;
  PriceSalesTTM: number;
  PriceBookMRQ: number;
  EnterpriseValue: number;
  EnterpriseValueRevenue: number;
  EnterpriseValueEbitda: number;
  constructor() {
  }
}


export class ValuationQuery {
  TickerUuid: QueryExpression;
  Updated: QueryExpression;
  UpdatedDate: QueryExpression;
  TrailingPE: QueryExpression;
  ForwardPE: QueryExpression;
  PriceSalesTTM: QueryExpression;
  PriceBookMRQ: QueryExpression;
  EnterpriseValue: QueryExpression;
  EnterpriseValueRevenue: QueryExpression;
  EnterpriseValueEbitda: QueryExpression;
  constructor() {
  }
}