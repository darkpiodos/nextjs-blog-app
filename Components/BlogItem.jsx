import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt="blod data"
          width={400}
          height={400}
          className=" rounded-t-md transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </Link>
      <div className="p-5">
        <p className="inline-blockrounded-sm text-neutral-700 text-sm italic mb-2">
          {category}
        </p>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}{" "}
        </h5>
        <p
          className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        ></p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium
          text-center text-white rounded-md 
          focus:ring-4 focus:outline-none focus:ring-neutral-300 
         dark:focus:ring-neutral-800 bg-black transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          {" "}
          Read more
          <BsArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
