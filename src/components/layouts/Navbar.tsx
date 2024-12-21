import { Menu } from "./menu"

function Navbar() {
  const menu = Menu.Admin 
  return (
    <>
      <div className="mt-4 w-full h-[70px] bg-[#508D4E] p-8 flex items-center rounded-full relative mb-3">
        <div className="absolute w-full h-[70px] bg-[#1A5319] rounded-full -z-10 left-2 top-3"></div>
        <p className="font-serif text-2xl sm:text-3xl font-bold text-white">
          EASY Shopping
        </p>
      </div>
      <div className="hidden md:flex w-full h-[70px]  shadow-md justify-evenly items-center">
        {menu &&
          menu.map((item) => (
            <p
              key={item.id}
              className="hover:border-b-4 hover:border-[#508D4E] cursor-pointer"
            >
              {item.name}
            </p>
          ))}
      </div>
    </>
  );
}

export default Navbar