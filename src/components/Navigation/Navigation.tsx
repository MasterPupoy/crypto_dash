import { useState } from "react";
import { ArrowLeft, ArrowRight, Coin } from "tabler-icons-react";
import { MobileNavigation } from "./MobileNavigation";
import { NavItems } from "./NavItems";

export const Navigation = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }

    if (theme === "dark") {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <nav>
      <MobileNavigation toggleTheme={toggleTheme} theme={theme} />
      <div
        className="hidden  bg-[#0E153A] md:flex min-h-screen h-full flex-col gap-1 p-5 shadow-md"
        style={{
          width: toggleSidebar ? "250px" : "100px",
          transition: "width 1s",
        }}
      >
        <div
          onClick={() => setToggleSidebar((prev) => !prev)}
          className="cursor-pointer self-end"
        >
          {toggleSidebar ? <ArrowLeft /> : <ArrowRight />}
        </div>
        <div className="text-2xl font-bold flex flex-row items-center justify-between mb-14">
          <div>
            <Coin size={50} />
          </div>
        </div>
        <NavItems toggleSidebar={toggleSidebar} />
      </div>
    </nav>
  );
};
