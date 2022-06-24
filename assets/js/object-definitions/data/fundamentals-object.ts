import {Highlights} from "./highlights-object";
import {General} from "./general-object";
import {SharesStats} from "./sharesStats-object";
import {Technicals} from "./technicals-object";
import {Valuation} from "./valuation-object";

export class Fundamentals {
  general: General;
  highlights: Highlights;
  sharesStats: SharesStats;
  technicals: Technicals;
  valuation: Valuation;
}
