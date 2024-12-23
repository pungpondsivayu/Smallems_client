import { AnimatePresence, motion } from "motion/react";
import React, { Component, ComponentType, useState } from "react";

function SignIn() {
  const AuthMenu = [{
    name : "เข้าสู่ระบบ",
    component : <SignInFrom/>
  },
  {
    name : "สมัครสมาชิก",
    component : <SignUpFrom/>
  }
];
  const [MenuAuth, setMenuAuth] = useState<number>(0);

  function SignInFrom() {
    return (
      <>
        {/* start siginIn From */}
        <div>
          <div className="mt-5">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="อีเมล"
              className="block w-full rounded-md bg-white p-4 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:border-l-8 border-[#508D4E]"
            />
          </div>
        </div>

        <div>
          <div className="mt-5">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="รหัสผ่าน"
              className="block w-full rounded-md bg-white p-4 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:border-l-8 border-[#508D4E]"
            />
          </div>
        </div>
        {/* end siginIn From */}
      </>
    );
  }

  function SignUpFrom() {
    return (
      <>
        {/* start siginUp From */}
        <div>
          <div className="mt-5">
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              autoComplete="email"
              placeholder="ชื่อ-นามสกุล"
              className="block w-full rounded-md bg-white p-4 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:border-l-8 border-[#508D4E]"
            />
          </div>
        </div>
        <div>
          <div className="mt-5">
            <input
              id="phone"
              name="phone"
              type="phone"
              required
              autoComplete="email"
              placeholder="เบอร์โทร"
              className="block w-full rounded-md bg-white p-4 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:border-l-8 border-[#508D4E]"
            />
          </div>
        </div>
        <div>
          <div className="mt-5">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="อีเมล"
              className="block w-full rounded-md bg-white p-4 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:border-l-8 border-[#508D4E]"
            />
          </div>
        </div>
        <div>
          <div className="mt-5">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="รหัสผ่าน"
              className="mt-5 block w-full rounded-md bg-white p-4 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:border-l-8 border-[#508D4E]"
            />
          </div>
        </div>
        {/* end siginUp From */}
      </>
    );
  }



  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 relative">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-10 text-start text-3xl/9 font-bold tracking-tight text-gray-900">
            {AuthMenu[MenuAuth].name}
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md grid grid-cols-2 text-lg">
          {AuthMenu.map((item, index) => (
            <div
              key={index}
              className={`text-center py-4 cursor-pointer ${
                MenuAuth === index ? "border-b-4 border-[#508D4E] " : ""
              }}`}
              onClick={() => {
                setMenuAuth(index);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="mt-5 mx-auto w-full max-w-md">
          <form action="#" method="POST" className="space-y-6">
            <div>
              {AuthMenu[MenuAuth].component}
              <button
                type="submit"
                className="mt-5 flex w-full justify-center rounded-md bg-[#508D4E] px-3 py-4 text-lg/6 font-semibold text-white shadow-sm"
              >
                {AuthMenu[MenuAuth].name}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;

