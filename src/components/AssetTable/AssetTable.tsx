import data from "../../dataset/data.json";
import type { TData } from "../../dataset/data";

export const AssetTable = () => {
  return (
    <div className="h-full dark:bg-transparent md:shadow-none  rounded-lg lg:w-[300px] xl:w-[600px] w-full  p-2 flex flex-col gap-3">
      {data.map((r: TData) => {
        return (
          <div
            key={r.asset}
            className="p-3 flex flex-col pr-5 gap-2 text-[#535353] transition-all delay-75  shadow-md dark:text-[#c5c5c5] bg-[#fff] dark:bg-[#303a52]  md:hover:shadow-lg rounded-md"
          >
            <div className="flex flex-row items-center gap-3  my-2">
              <div>
                <img
                  src={r.logo}
                  className="w-10 h-10 border rounded-full border-black dark:border-[#d7d7d7] text-xs"
                  alt={`${r.asset} icon`}
                />
              </div>
              <div className="flex flex-col grow">
                <div className="flex flex-row justify-between w-full">
                  <h2 className="font-poppins">{r.asset}</h2>
                  <p>
                    {r.amount} {r.asset}
                  </p>
                </div>
                <div className="flex flex-row grow justify-between text-xs ">
                  <h4 className="text-[#a7a7a7]">Binance</h4>
                  <p className="font-poppins text-[#a7a7a7]">
                    $ {r.dollar_amount} USD
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <h3 className="font-poppins text-[#6d6d6d]">Realized P&L</h3>
              <p className="font-poppins">{r.realized_pnl} USD</p>
            </div>
            <p className="self-end font-poppins text-sm text-[#a7a7a7]">
              {r.realized_pnl_percent}
            </p>
            <div className="flex flex-row justify-between">
              <h3 className="font-poppins text-[#6d6d6d]">Unrealized P&L</h3>
              <p className="font-poppins">{r.unrealized_pnl} USD</p>
            </div>
            <p className="font-poppins text-sm text-[#a7a7a7] self-end">
              {r.unrealized_pnl_percent}
            </p>
            <div className="flex flex-row justify-between">
              <h3 className="font-poppins text-[#6d6d6d]">Total P&L</h3>
              <p className="font-poppins font-bold ">{r.total_pnl} USD</p>
            </div>
            <p className="font-poppins text-sm text-[#a7a7a7] self-end">
              {r.total_pnl_percent}
            </p>
          </div>
        );
      })}
    </div>
  );
};
