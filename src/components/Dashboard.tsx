import { Sidebar } from "./Sidebar";

export const Dashboard = () => {
  return (
    <div className="flex flex-row flex-1 w-full">
      <Sidebar />
      <div className="bg-white w-full"></div>
    </div>
  );
};
