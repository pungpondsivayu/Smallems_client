import { Component, ComponentType } from "react";
import path from "./path";
import { Home, SignIn, SignUp } from "../pages";

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
    // เข้าสู่ระบบ
    path: path.SignIn,
    component: SignIn,
    allowedRoles: [],
  },
  {
    // สมัครสมาชิก
    path: path.SignUp,
    component: SignUp,
    allowedRoles: [],
  },
];

export const MainRoute:IroutesConfig[] = [...routeConfig];
