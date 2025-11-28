import { useEffect, useState } from "react";
import { getComparableStocks } from "../../api";
import { CompanyCompData } from "../../company";
import ComparableFinderItem from "./ComparableFinderItem/ComparableFinderItem";

type Props = {
  ticker: string;
  className?: string;
};

const ComparableFinder = ({ ticker, className }: Props) => {
  //comparableStockData is an array
  const [comparableStockData, setComparableStockData] =
    useState<CompanyCompData[]>();
  useEffect(() => {
    const fetchComparableStockData = async () => {
      try {
        //array
        const result = await getComparableStocks(ticker);
        setComparableStockData(result?.data);
      } catch (error) {}
    };
    fetchComparableStockData();
  }, [ticker]);

  const finderClass = ["flex flex-wrap items-center gap-3", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={finderClass}>
      {comparableStockData?.map((company) => (
        <ComparableFinderItem
          key={company.symbol}
          ticker={company.symbol}
        />
      ))}
    </div>
  );
};

export default ComparableFinder;
