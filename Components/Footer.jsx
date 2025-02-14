import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const iconStyle =
  "bg-white text-black w-10 h-10 rounded-full flex items-center justify-center";
const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="This is my Logo" width="120" />
      <p className="text-sm text-white">
        All Rights Reserved {new Date().getFullYear()}
      </p>
      <div className="flex space-x-2">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
