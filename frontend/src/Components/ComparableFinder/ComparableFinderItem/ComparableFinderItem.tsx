type Props = {
  ticker: string;
};

const ComparableFinderItem = ({ ticker }: Props) => {
  return (
    <div className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest uppercase text-blueGray-700 border border-blueGray-200 rounded-lg bg-white shadow-sm">
      {ticker}
    </div>
  );
};

export default ComparableFinderItem;
