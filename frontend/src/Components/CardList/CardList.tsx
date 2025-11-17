import { JSX } from "react";
import Card from "../Card/Card";

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName="APPLE" ticker="AAPL" price={120}></Card>
      <Card companyName="MICROSOFT" ticker="MSFT" price={200}></Card>
      <Card companyName="TESLA" ticker="TLSA" price={300}></Card>
    </div>
  );
};

export default CardList;
