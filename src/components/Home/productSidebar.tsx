import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface props {}

function productSidebar({}: props) {
  const Category = [
    {
      id: 1,
      name: "อาหารทานเล่น",
    },
    {
      id: 2,
      name: "เครื่องดื่ม",
    },
    {
      id: 3,
      name: "ขนมขบเคี้ยว",
    },
    {
      id: 4,
      name: "อาหารสำเร็จรูป",
    },
    {
      id: 5,
      name: "ของใช้ทั่วไป",
    },
  ];
  const [category, setCategory] = useState<boolean>(true);
  const [price, setPrice] = useState<boolean>(true);

  return (
    <div>
      <div className="mb-10">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">หมวดหมู่สินค้า</p>
          <FontAwesomeIcon
            icon={category ? faChevronDown : faChevronUp}
            className="text-xl cursor-pointer"
            onClick={() => setCategory(!category)}
          />
        </div>
        <form>
          {category &&
            Category &&
            Category.map((item, index) => (
              <div
                key={index}
                className="mt-8 text-md flex justify-start items-center gap-3 pl-5"
              >
                <input value={item.id} type="checkbox" className="h-6 w-6" />
                <p>{item.name}</p>
              </div>
            ))}
        </form>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">ราคาสินค้า</p>
          <FontAwesomeIcon
            icon={price ? faChevronDown : faChevronUp}
            className="text-xl cursor-pointer"
            onClick={() => setPrice(!price)}
          />
        </div>
        <form>
          {price && (
            <>
              <div className="mt-8 text-md flex justify-start items-center gap-3 pl-5">
                <input name="price" type="radio" className="h-6 w-6" />
                <p>ค่าเริ่มต้น</p>
              </div>
              <div className="mt-8 text-md flex justify-start items-center gap-3 pl-5">
                <input name="price" type="radio" className="h-6 w-6" />
                <p>มากไปน้อย</p>
              </div>
              <div className="mt-8 text-md flex justify-start items-center gap-3 pl-5">
                <input name="price" type="radio" className="h-6 w-6" />
                <p>น้อยไปมาก</p>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default productSidebar;
