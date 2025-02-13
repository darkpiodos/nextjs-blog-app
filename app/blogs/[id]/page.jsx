"use client";
import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";

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
      const resolvedParams = await params; // Unwrap the params promise
      setId(resolvedParams.id); // Set the ID state
      fetchBlogData(resolvedParams.id); // Fetch blog data with the resolved ID
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
          <button className="flex items-center gap-2 front-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started <Image src={assets.arrow} alt="this is an arrow" />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[750px] mx-auto">
            {data.title}
          </h1>

          <Image
            className="mx-auto mt-6 border border-white rounded-full"
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
        <p>{data.description}</p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="facebook icon" />
            <Image src={assets.twitter_icon} width={50} alt="twitter icon" />
            <Image
              src={assets.googleplus_icon}
              width={50}
              alt="google plus icon"
            />
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
