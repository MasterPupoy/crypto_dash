import { Asset } from "tabler-icons-react";
import { AssetGraph } from "./AssetGraph/AssetGraph";
import { AssetTable } from "./AssetTable/AssetTable";

export const Dashboard = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="pt-16 md:pt-0 h-[200px] dark:bg-[#0000] w-full bg-[#eceef2] flex flex-col justify-center gap-2 px-6">
        <h3 className="font-poppins text-[#535353] text-3xl dark:text-[#a7a7a7] flex flex-row gap-2 items-center ">
          {<Asset size={30} />}
          Assets
        </h3>
        <p className="font-poppins text-[#a8a8a8] text-sm ">
          Current assets, profit and losses
        </p>
        <div className="border w-full boder-[#d7d7d7]"></div>
      </div>
      <div className="w-full  dark:bg-[#1e293b] h-full bg-[#e6e8ea] flex flex-row items-end flex-wrap-reverse gap-6 px-3 pt-[3.5rem] md:pt-[3.5rem] sm:px-5 lg:p-10 overflow-scroll">
        <AssetTable />
        <AssetGraph />
      </div>
    </div>
  );
};
