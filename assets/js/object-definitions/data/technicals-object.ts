import {QueryExpression} from "../query/filter-object";

export class Technicals {
  TickerUuid: string;
  Updated: string;
  UpdatedDate: string;
  Beta: number;
  FiftyTwoWeekHigh: number;
  FiftyTwoWeekLow: number;
  FiftyDayMA: number;
  TwoHundredDayMA: number;
  SharesShort: number;
  SharesShortPriorMonth: number;
  ShortRatio: number;
  ShortPercent: number;

  constructor() {
  }
}

export class TechnicalsQuery {
  TickerUuid: QueryExpression;
  Updated: QueryExpression;
  UpdatedDate: QueryExpression;
  Beta: QueryExpression;
  FiftyTwoWeekHigh: QueryExpression;
  FiftyTwoWeekLow: QueryExpression;
  FiftyDayMA: QueryExpression;
  TwoHundredDayMA: QueryExpression;
  SharesShort: QueryExpression;
  SharesShortPriorMonth: QueryExpression;
  ShortRatio: QueryExpression;
  ShortPercent: QueryExpression;

  constructor() {
  }
}
