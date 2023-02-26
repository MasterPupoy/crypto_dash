import data from "../../dataset/data.json";
import type { TData } from "../../dataset/data";
import { AssetCard } from "./AssetCard";

export const AssetTable = () => {
  return (
    <div className="h-fit dark:bg-transparent md:shadow-none grow  rounded-lg lg:w-[300px] xl:w-[600px] w-full flex flex-col gap-3">
      {data.map((r: TData) => {
        return <AssetCard r={r} />;
      })}
    </div>
  );
};
