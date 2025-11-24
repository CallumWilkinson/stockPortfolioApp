import { CompanyKeyMetrics } from "../../company";
import RatioList from "../../Components/RatioList/RatioList";
import Table from "../../Components/Table/Table";
import { testIncomeStatementData } from "../../Components/Table/TestData";

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>CleanTicker design page</h1>
      <h2>
        Below are some of the Components for the CleanTicker app for
        development, desgin and testing purposes
      </h2>
      <RatioList
        data={testIncomeStatementData}
        config={tableConfig}
      ></RatioList>
      <Table></Table>
    </>
  );
};

export default DesignPage;
