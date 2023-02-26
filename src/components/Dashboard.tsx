import { AssetGraph } from "./AssetGraph/AssetGraph";
import { AssetTable } from "./AssetTable/AssetTable";

export const Dashboard = () => {
  return (
    <div className="w-full dark:bg-[#1e293b]  bg-[#e6e8ea] flex flex-row flex-wrap flex-wrap-reverse gap-6 px-3 pt-[3.5rem] md:pt-[3.5rem] sm:px-5 lg:p-10 overflow-scroll">
      <AssetTable />
      <AssetGraph />
    </div>
  );
};
