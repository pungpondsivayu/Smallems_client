import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "./menu";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";
import { motion , AnimatePresence } from "motion/react";

function Navbar() {
  const menu = Menu.Admin;
  const [Open, setOpen] = useState<Boolean>(false);
  return (
    <>
      <div className="mt-4 w-full h-[70px] bg-[#508D4E] px-10 flex justify-between items-center rounded-full relative mb-3">
        <div className="absolute w-full h-[70px] bg-[#1A5319] rounded-full -z-10 left-2 top-3"></div>
        <p className="font-serif text-2xl font-bold text-white">
          EASY Shopping
        </p>
        <FontAwesomeIcon
          icon={faBars}
          className="block sm:hidden text-2xl text-white cursor-pointer"
          onClick={() => setOpen(!Open)}
        />
      </div>
      <div className="hidden md:flex w-full h-[65px]  shadow-md justify-evenly items-center">
        {menu &&
          menu.map((item) => (
            <p
              key={item.id}
              className="text-base hover:border-b-4 hover:border-[#508D4E] cursor-pointer"
            >
              {item.name}
            </p>
          ))}
      </div>
      {/* responsive navbar */}

      <AnimatePresence>
        {Open && (
          <motion.div
            className="bg-[#1A5319] m-4 rounded-2xl flex flex-col sm:hidden justify-center items-center text-white overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {menu &&
              menu.map((item) => (
                <p key={item.id} className="text-base cursor-pointer w-full text-center h-14 flex justify-center items-center hover:bg-[#508D4E]">
                  {item.name}
                </p>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
