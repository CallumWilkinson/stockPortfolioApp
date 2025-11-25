import { useOutletContext } from "react-router-dom";
import { CompanyIncomeStatement } from "../../company";
import { useEffect, useState } from "react";
import { getIncomeStatement } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";

interface Props {}

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: "Revenue",
    render: (company: CompanyIncomeStatement) => company.revenue,
  },
  {
    label: "Cost Of Revenue",
    render: (company: CompanyIncomeStatement) => company.costOfRevenue,
  },
  {
    label: "Depreciation & Amortization",
    render: (company: CompanyIncomeStatement) =>
      company.depreciationAndAmortization,
  },
  {
    label: "Operating Income",
    render: (company: CompanyIncomeStatement) => company.operatingIncome,
  },
  {
    label: "Income Before Taxes",
    render: (company: CompanyIncomeStatement) => company.incomeBeforeTax,
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) => company.netIncome,
  },
  {
    label: "Earnings Per Share",
    render: (company: CompanyIncomeStatement) => company.eps,
  },
  {
    label: "Earnings Per Share (Diluted)",
    render: (company: CompanyIncomeStatement) => company.epsDiluted,
  },
];

const IncomeStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [incomeData, setIncomeData] = useState<CompanyIncomeStatement[]>();
  useEffect(() => {
    const IncomeStatementFetch = async () => {
      try {
        const result = await getIncomeStatement(ticker!);
        setIncomeData(result!.data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    IncomeStatementFetch();
  }, [ticker]);
  return (
    <>
      {incomeData ? (
        <Table config={configs} data={incomeData}></Table>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
};

export default IncomeStatement;
