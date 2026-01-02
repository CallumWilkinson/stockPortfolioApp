import React, { SyntheticEvent } from "react";

interface Props {
  onPortfolioCreate: (symbol: string) => void;
  symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  const handleClick = () => {
    onPortfolioCreate(symbol);
  };

  return (
    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
      <form onSubmit={handleClick}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button
          type="submit"
          className="p-2 px-8 font-semibold tracking-tight text-brand-sand bg-brand-forest rounded-lg transition-colors hover:bg-brand-mint focus:outline-none"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
