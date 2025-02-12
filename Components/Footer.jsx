import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="This is my Logo" width="120" />
      <p className="text-sm text-white">
        All rights reserved. Copyright @blogger
      </p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="Facebook Icon" width="40" />
        <Image src={assets.twitter_icon} alt="Twitter Icon" width="40" />{" "}
        <Image src={assets.googleplus_icon} alt="Google Plus Icon" width="40" />
      </div>
    </div>
  );
};

export default Footer;
