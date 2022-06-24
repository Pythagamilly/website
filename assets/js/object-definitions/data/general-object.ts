import {QueryExpression} from "../query/filter-object";

export class General {
  Uuid: string;
  Code: string;
  Type: string;
  Name: string;
  Exchange: string;
  CurrencyCode: string;
  CurrencyName: string;
  CurrencySymbol: string;
  CountryName: string;
  CountryISO: string;
  Isin: string;
  EmployerIDNumber: string;
  FiscalYearEnd: string;
  IPODate: string;
  InternationalDomestic: string;
  Sector: string;
  Industry: string;
  GicSector: string;
  GicGroup: string;
  GicIndustry: string;
  GicSubIndustry: string;
  Description: string;
  Address: string;
  Phone: string;
  WebURL: string;
  LogoURL: string;
  FullTimeEmployees: number;
  UpdatedAt: string;
  constructor() {
  }
}

export class GeneralQuery {
  Uuid: QueryExpression;
  Code: QueryExpression;
  Type: QueryExpression;
  Name: QueryExpression;
  Exchange: QueryExpression;
  CurrencyCode: QueryExpression;
  CurrencyName: QueryExpression;
  CurrencySymbol: QueryExpression;
  CountryName: QueryExpression;
  CountryISO: QueryExpression;
  Isin: QueryExpression;
  EmployerIDNumber: QueryExpression;
  FiscalYearEnd: QueryExpression;
  IPODate: QueryExpression;
  InternationalDomestic: QueryExpression;
  Sector: QueryExpression;
  Industry: QueryExpression;
  GicSector: QueryExpression;
  GicGroup: QueryExpression;
  GicIndustry: QueryExpression;
  GicSubIndustry: QueryExpression;
  Description: QueryExpression;
  Address: QueryExpression;
  Phone: QueryExpression;
  WebURL: QueryExpression;
  LogoURL: QueryExpression;
  FullTimeEmployees: number;
  UpdatedAt: QueryExpression;
  constructor() {
  }
}