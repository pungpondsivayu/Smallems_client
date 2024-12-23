import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "./menu";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import path from "../../routes/path";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router";

function Navbar() {
  const menu = Menu.Admin;
  const [Open, setOpen] = useState<Boolean>(false);
  return (
    <>
      {/* start Navbar */}
      <div className="mt-4 mb-8">
        <div className="w-full h-[70px] bg-[#508D4E] px-10 flex justify-between items-center rounded-full relative mb-3">
          <div className="absolute w-full h-[70px] bg-[#1A5319]bg-[#1A5319] rounded-full -z-10 left-2 top-3"></div>
          <NavLink
            to={path.Index}
            className="font-serif text-xl sm:text-2xl font-bold text-white"
          >
            EASY Shopping
          </NavLink>
          <div className="flex items-center gap-8 text-xl text-white">
            <Link to={path.SignIn}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <FontAwesomeIcon
              icon={!Open ? faBars : faXmark}
              className="block sm:hidden text-2xl text-white cursor-pointer"
              onClick={() => setOpen(!Open)}
            />
          </div>
        </div>
        {/* end Navbar */}

        {/* start menu */}
        <div className="hidden sm:flex w-full h-[65px]  shadow-md justify-evenly items-center">
          {menu &&
            menu.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="text-base hover:border-b-4 hover:border-[#508D4E] cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
        </div>
        {/* start responsive Menu */}
        <AnimatePresence>
          {Open && (
            <motion.div
              className="bg-[#1A5319] m-4 rounded-2xl flex flex-col sm:hidden justify-center items-center text-white overflow-hidden relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {menu &&
                menu.map((item) => (
                  <Link
                    key={item.id}
                    to={item.name}
                    className="text-base cursor-pointer w-full text-center h-14 flex justify-center items-center hover:bg-[#508D4E]"
                  >
                    {item.name}
                  </Link>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
        {/* end responsive Menu */}
        {/* end menu */}
      </div>
    </>
  );
}

export default Navbar;
