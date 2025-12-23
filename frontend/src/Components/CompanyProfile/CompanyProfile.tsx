import { useOutletContext } from "react-router-dom";
import { CompanyKeyMetrics } from "../../company";
import { useEffect, useState } from "react";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinner/Spinner";
import {
  formatLargeNonMonetaryNumber,
  formatRatio,
  formatLargeMonetaryNumber,
} from "../../Helpers/NumberFormatting";
import StockComment from "../StockComment/StockComment";

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeMonetaryNumber(company.marketCap),
    subTitle: "Total value of all a company's shares of stock",
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.currentRatioTTM),
    subTitle:
      "Measures the company's ability to pay short term debt obligations",
  },
  {
    label: "Return On Equity (ROE)",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.returnOnEquityTTM),
    subTitle: "Net income generated for each dollar of shareholder equity",
  },
  {
    label: "Return On Assets (ROA)",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.returnOnAssetsTTM),
    subTitle:
      "Shows how efficiently the company uses its assets to generate profit",
  },
  {
    label: "Free Cash Flow To Equity",
    render: (company: CompanyKeyMetrics) =>
      formatLargeMonetaryNumber(company.freeCashFlowToEquityTTM),
    subTitle:
      "Cash available to shareholders after operating expenses, interest and investments",
  },
  {
    label: "Tangible Asset Value",
    render: (company: CompanyKeyMetrics) =>
      formatLargeMonetaryNumber(company.tangibleAssetValueTTM),
    subTitle:
      "Approximate value of the company's physical and financial assets minus liabilities",
  },
  {
    label: "Free Cash Flow Yield",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.freeCashFlowYieldTTM),
    subTitle: "Free cash flow generated per dollar of market value",
  },
  {
    label: "Capex To Revenue",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.capexToRevenueTTM),
    subTitle: "Portion of revenue that is reinvested into capital expenditures",
  },
  {
    label: "Graham Number",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.grahamNumberTTM),
    subTitle:
      "Upper bound price that a conservative value investor might consider paying",
  },
  {
    label: "Earnings Yield",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.earningsYieldTTM),
    subTitle:
      "Earnings generated per dollar of market value, inverse of the P/E ratio",
  },
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  useEffect(() => {
    const getCompanyKeyRatios = async () => {
      try {
        const value = await getKeyMetrics(ticker);
        setCompanyData(value?.data[0]);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    getCompanyKeyRatios();
  }, [ticker]);
  return (
    <>
      {companyData ? (
        <>
          <RatioList data={companyData} config={tableConfig} />
          <StockComment stockSymbol={ticker} />
        </>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
};

export default CompanyProfile;
