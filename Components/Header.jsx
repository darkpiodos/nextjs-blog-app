import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  const [email, setEmail] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error");
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 ld:px-28">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={assets.logo}
            width={180}
            alt="Darwin's Blog Logo"
            className="w-[130px] sm:w-auto"
          />
        </Link>

        <Link href="/admin/addBlog">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-gray-800 group-hover:from-gray-700 group-hover:to-black hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800">
            <span className="flex items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Get Started <BsArrowRight size={16} className="ml-2" />
            </span>
          </button>
        </Link>
      </div>

      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Darwin Piodos - Crafting Visual Stories Through Design and Innovation
        </p>
        <form
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border-2 rounded-lg border-solid border-black "
          action=""
          onSubmit={onSubmitHandler}
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none rounded-lg"
          />
          <button
            type="submit"
            className="border-l-2 border-black py-4 px-4 sm:px-8 bg-black text-white active:bg-gray-600 active:text-white hover:bg-black/90 hover:text-white transition-all ease-in duration-7"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
