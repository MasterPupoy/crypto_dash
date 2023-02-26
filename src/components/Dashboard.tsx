import { AssetGraph } from "./AssetGraph";
import { AssetTable } from "./AssetTable";

export const Dashboard = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0E163A 60%, #ffff 60%)",
      }}
      className="w-full flex flex-row flex-wrap gap-6 p-2 pt-[3.5rem] md:pt-[3.5rem] sm:p-5 lg:p-10 overflow-scroll"
    >
      <AssetTable />
      <AssetGraph />
    </div>
  );
};
