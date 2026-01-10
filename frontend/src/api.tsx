import axios from "axios";
import {
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
  CompanyIncomeStatement,
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyCompData,
} from "./company";
import { handleError } from "./Helpers/ErrorHandler";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    //search page expects error message to be returned
    if (axios.isAxiosError(error)) {
      console.log("error from FMP API on getCompanyProfile: ", error.message);
      handleError(error);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "an unexpected error has occured";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error from FMP API on getCompanyProfile: ", error.message);
    handleError(error);
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error from FMP API on getKeyMetrics: ", error.message);
    handleError(error);
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/stable/income-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error from FMP API on getIncomeStatement: ", error.message);
    handleError(error);
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error from FMP API on getBalanceSheet: ", error.message);
    handleError(error);
  }
};

export const getCashFlowStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error from FMP API on getCashFlowStatement: ", error.message);
    handleError(error);
  }
};

export const getComparableStocks = async (query: string) => {
  try {
    //returns array
    const data = await axios.get<CompanyCompData[]>(
      `https://financialmodelingprep.com/stable/stock-peers?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error from FMP API on getComparableStocks: ", error.message);
    handleError(error);
  }
};
