import { Component, ComponentType } from "react";
import path from "./path";
import { Home, SignIn } from "../pages";

interface IroutesConfig {
  path: string;
  component: ComponentType<any>;
  allowedRoles: string[];
}

const routeConfig: IroutesConfig[] = [
  {
    // หน้าแรก
    path: path.Index,
    component: Home,
    allowedRoles: [],
  },
  {
    // เข้าสู่ระบบ , สมัครสมาชิก
    path: path.SignIn,
    component: SignIn,
    allowedRoles: [],
  },
];

export const MainRoute:IroutesConfig[] = [...routeConfig];
