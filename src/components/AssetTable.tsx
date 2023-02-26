import data from "../dataset/data.json";
import type { TData } from "../dataset/data";

export const AssetTable = () => {
  return (
    <div className="h-full bg-white dark:bg-[#1e293b] text-black md:grow lg:w-[600px] xl:w-2/4 w-full shadow-lg rounded-md p-2 flex flex-col gap-3">
      {data.map((r: TData) => {
        return (
          <div className="shadow-md bg-[#11e293b] dark:bg-[#303a52]">
            <p>{r.asset}</p>
            <p>{r.coin}</p>
            <p>{r.dollar_amount}</p>
          </div>
        );
      })}
    </div>
  );
};
