import data from "../dataset/data.json";
import type { TData } from "../dataset/data";

export const AssetTable = () => {
  return (
    <div className="h-full md:grow dark:bg-transparent md:bg-transparent md:shadow-none shadow-md bg-white rounded-lg lg:w-[600px] xl:w-2/4 w-full  p-2 flex flex-col gap-3">
      {data.map((r: TData) => {
        return (
          <div className="text-[#535353] dark:text-[#c5c5c5] bg-[#fff] dark:bg-[#303a52]  md:hover:shadow-lg rounded-md">
            <p>{r.asset}</p>
            <p>{r.coin}</p>
            <p>{r.dollar_amount}</p>
          </div>
        );
      })}
    </div>
  );
};
