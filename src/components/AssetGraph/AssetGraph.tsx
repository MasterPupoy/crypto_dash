import { Treemap } from "./Treemap";
import data from "../../dataset/data.json";
import { Cash, Clock, ReportMoney } from "tabler-icons-react";

export const AssetGraph = () => {
  const netWorth = data.reduce(
    (acc, val) => acc + Number(val.total_pnl.replace(",", "")),
    0
  );

  return (
    <div className="flex flex-col items-center grow  lg:grow md:w-full xl:w-[400px] h-fit xl:h-fit 2xl:h-full dark:bg-transparent shadow-md d bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100">
      <Treemap />
      <div className="flex flex-col self-start gap-12 py-5">
        <div className=" px-5 flex flex-col items-start">
          <div className="flex flex-row gap-2">
            <ReportMoney className="fill-[#0d367d]" />
            <h3 className="font-poppins  font-semibold text-[#535353]">
              Net Worth
            </h3>
          </div>
          <p className="text-[#535353] dark:text-[#a7a7a7] px-5 text-lg font-semibold font-poppins">
            $ {netWorth} USD
          </p>
        </div>
        <div className=" px-5 flex flex-col items-start">
          <div className="flex flex-row gap-2">
            <Cash className="fill-[#0d367d]" />
            <h3 className="font-poppins  font-semibold text-[#535353]">
              Realized Returns
            </h3>
          </div>
          <p className="text-[#535353] dark:text-[#a7a7a7] px-5 text-lg font-semibold font-poppins">
            $ 51328 USD
          </p>
        </div>

        <div className=" px-5 flex flex-col items-start">
          <div className="flex flex-row gap-2">
            <Clock className="fill-[#0d367d]" />
            <h3 className="font-poppins font-semibold text-[#535353]">
              Unrealized Returns
            </h3>
          </div>
          <p className="text-[#535353] dark:text-[#a7a7a7] px-5 text-lg font-semibold font-poppins">
            $ 15829 USD
          </p>
        </div>
      </div>
    </div>
  );
};
