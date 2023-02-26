import { useState } from "react";
import {
  ArrowLeftBar,
  Asset,
  Bookmarks,
  BrandOpenSource,
  Man,
  Receipt,
} from "tabler-icons-react";

type TNavItemsProp = {
  toggleSidebar: boolean;
};

const navItems = [
  {
    icon: <Asset />,
    to: "Assets",
  },
  {
    icon: <Bookmarks />,
    to: "Invitations",
  },
  {
    icon: <BrandOpenSource />,
    to: "Asset Sources",
  },
  {
    icon: <Man />,
    to: "Profile",
  },
  {
    icon: <Receipt />,
    to: "Billing",
  },
  {
    icon: <ArrowLeftBar />,
    to: "Sign out",
  },
];

export const NavItems = ({ toggleSidebar }: TNavItemsProp) => {
  const [active, setActive] = useState(navItems[0].to);

  return (
    <ul
      className="flex gap-10 flex-col"
      style={{
        visibility: toggleSidebar ? "visible" : "hidden",
        opacity: toggleSidebar ? 1 : 0,
        transition: "opacity 0.5s, visibility 0.5s",
      }}
    >
      {navItems.map((navs) => {
        return (
          <li
            key={`n${navs.to}`}
            className="p-2 flex flex-row gap-1 text-md font-medium cursor-pointer"
            onClick={() => setActive(navs.to)}
            style={{
              background: active === navs.to ? "#0d1f81" : "none",
              color: active === navs.to ? "#ffff" : "#64748b",
              borderRadius: "5px",
              transition: "all 0.4s",
            }}
          >
            {navs.icon}
            {navs.to}
          </li>
        );
      })}
    </ul>
  );
};
