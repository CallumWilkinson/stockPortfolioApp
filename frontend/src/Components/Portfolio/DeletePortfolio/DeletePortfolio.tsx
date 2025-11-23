import React from "react";
import { SyntheticEvent } from "react";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue}></input>
        <button className="block w-full py-3 font-semibold tracking-tight text-brand-sand duration-200 border-2 rounded-lg bg-brand-forest border-brand-forest hover:text-brand-forest hover:bg-brand-sand">
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
