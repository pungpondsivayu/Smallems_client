import { NavLink } from "react-router";
import ProductSidebar from "../components/Home/productSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <>
      <div className="flex gap-5 my-8">
        <div className="w-3/12 shadow-md p-5 hidden lg:block h-fit">
          <ProductSidebar />
        </div>
        <div className="px-4 md:px-0 w-full lg:w-3/4 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="w-full  max-h-[450px] min-h-[450px] rounded-2xl shadow-md p-3 flex flex-col justify-between gap-2">
            <div className="w-full h-72">
              <img
                src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/93/88/8850718801893/8850718801893_1-20230314112552-.jpg"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <p className="overflow-hidden text-ellipsis">
              เลย์ มันฝรั่งแท้ทอดกรอบแผ่นเรียบ รสโนริสาหร่าย 69 ก.
            </p>
            <div className="flex justify-between items-center">
              <p className="font-bold">1000</p>
              <NavLink
                to={""}
                className="bg-[#1A5319] hover:bg-[#508D4E] transition-colors text-white p-3 rounded-lg "
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
