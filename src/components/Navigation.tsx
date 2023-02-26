import { useState } from "react";

export const Navigation = () => {
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
      <div className=" h-12 w-full absolute lg:hidden bg-green-400">
        <div>Nav</div>
        <button className="button" onClick={() => toggleTheme()}>
          {theme}
        </button>
      </div>
      <div className="hidden min-w-[250px] bg-slate-500 lg:flex min-h-screen">
        <ul>
          <li>Assets</li>
          <li>Invitations</li>
          <li>Asset Sources</li>
          <li>Profile</li>
          <li>Billing</li>
          <li>Sign out</li>
        </ul>
      </div>
    </nav>
  );
};
