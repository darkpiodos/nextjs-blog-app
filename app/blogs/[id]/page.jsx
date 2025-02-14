"use client";
import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const iconStyle =
  "bg-white text-black w-10 h-10 rounded-full flex items-center justify-center";
const Page = () => {
  const params = useParams(); // Get the params as a promise
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);

  const fetchBlogData = async (resolvedId) => {
    try {
      const response = await axios.get(`/api/blog`, {
        params: {
          id: resolvedId,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
      fetchBlogData(resolvedParams.id);
    };

    fetchParams();
  }, [params]);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt="this is a logo"
              className="w-[130px] sm:w-auto"
            />
          </Link>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[750px] mx-auto">
            {data.title}
          </h1>

          <Image
            className="mx-auto mt-10 border border-white rounded-full"
            src={data.authorImg}
            alt="this is an author image"
            width={60}
            height={60}
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          alt="this is the blog image"
          width={1280}
          height={720}
          className="border-4 border-white"
        />
        <p className="mt-8">{data.description}</p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={iconStyle}
            >
              <FaFacebookF />
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
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
