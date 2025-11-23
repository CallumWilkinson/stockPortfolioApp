import { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { Link } from "react-router-dom";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <>
      <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg bg-brand-mist text-brand-forest md:w-1/3">
        <Link
          to={`/company/${portfolioValue}`}
          className="pt-6 text-xl font-display font-semibold tracking-tight"
        >
          {portfolioValue}
        </Link>
        <DeletePortfolio
          portfolioValue={portfolioValue}
          onPortfolioDelete={onPortfolioDelete}
        ></DeletePortfolio>
      </div>
    </>
  );
};

export default CardPortfolio;
