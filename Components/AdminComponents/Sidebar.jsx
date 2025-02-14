"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaPlus, FaPen, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const getLinkClass = (path) =>
    `flex items-center gap-3 font-medium px-3 py-3 rounded-lg 
    ${
      pathname === path ? "bg-black text-white mt-3" : "hover:bg-gray-200 mt-3"
    }`;

  return (
    <div className="flex flex-col bg-neutral-50 shadow-lg p-5">
      <Link href="/" className="">
        <div className="px-2  py-3 flex items-center">
          <Image src={assets.logo} width={150} alt="This is a logo" />
        </div>{" "}
      </Link>

      <div className="w-60 h-[100vh] relative py-12">
        <div>
          <Link
            href="/admin/addBlog"
            className={getLinkClass("/admin/addBlog")}
          >
            <FaPlus /> <p>Add Blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className={getLinkClass("/admin/blogList")}
          >
            <FaPen /> <p>Blog List</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className={getLinkClass("/admin/subscriptions")}
          >
            <FaEnvelope /> <p>Email Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
