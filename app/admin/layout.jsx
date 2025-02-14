import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import React from "react";
import { ToastContainer } from "react-toastify";
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex ">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-7 max-h-[60px] px-12 shadow-lg">
            <h2 className="font-semibold text-xl">Admin Panel</h2>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
