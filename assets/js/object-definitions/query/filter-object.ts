import {GeneralQuery} from "../data/general-object";
import {HighlightsQuery} from "../data/highlights-object";
import {SharesStatsQuery} from "../data/sharesStats-object";
import {TechnicalsQuery} from "../data/technicals-object";
import {ValuationQuery} from "../data/valuation-object";

export class QueryExpression {
  include: boolean;
  expression: boolean;
  upper: number;
  lower: number;
}

export class Filter {
  generalQuery: GeneralQuery;
  highlightQuery: HighlightsQuery;
  sharesStatsQuery: SharesStatsQuery;
  technicalsQuery: TechnicalsQuery;
  valuationQuery: ValuationQuery;
  constructor() {
  }
}

