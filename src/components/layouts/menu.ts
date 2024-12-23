import path from "../../routes/path";

const createMenuItem = (id:number, name:string, path:string = "") => ({ id, name, path });

export const Menu = {
  Admin: [
    createMenuItem(1, "หน้าแรก" , path.Index),
    createMenuItem(2, "สินค้า"),
    createMenuItem(3, "หมวดหมู่"),
    createMenuItem(4, "ผู้ใช้งาน"), 
    createMenuItem(5, "รายการสั่งซื้อ"),
    createMenuItem(6, "คลังสินค้า"),
  ],
  User: [],
};
