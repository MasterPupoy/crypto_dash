import { useState } from "react";
import { Coin, Menu2, X } from "tabler-icons-react";
import { NavItems } from "./NavItems";
import { AnimatePresence, motion } from "framer-motion";

type TMobileNavProps = {
  toggleTheme: () => void;
  theme: string;
};

export const MobileNavigation = ({ toggleTheme, theme }: TMobileNavProps) => {
  const [toggleMobileNav, setMobileNav] = useState(false);

  return (
    <>
      <div className=" items-center h-17 justify-between w-full absolute bg-[#0E153A] md:hidden flex flex-row ">
        <div>
          <Coin size={50} />
        </div>
        <button className="button" onClick={() => toggleTheme()}>
          {theme}
        </button>
        <div onClick={() => setMobileNav(true)} className="cursor-pointer">
          <Menu2 size={40} />
        </div>
      </div>
      <AnimatePresence>
        {toggleMobileNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0 }}
            className="absolute w-full h-full bg-[#000]/[0.6] flex justify-end"
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "80%" }}
              transition={{ duration: 0.4 }}
              exit={{ width: 0 }}
              className="p-5 h-full bg-[#0E153A] flex gap-10 flex-col"
            >
              <div className="self-end">
                <X
                  size={40}
                  className="cursor-pointer"
                  onClick={() => setMobileNav(false)}
                />
              </div>
              <NavItems toggleSidebar={toggleMobileNav} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
