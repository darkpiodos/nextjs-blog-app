import Image from "next/image";
import React from "react";
import { FaTimes } from "react-icons/fa";

const BlogTable = ({ title, author, date, image, deleteBlog, mongoId }) => {
  const BlogDate = new Date(date);
  return (
    <tr className="bg-white border-b ">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900"
      >
        <p>{author ? author : "No Author"}</p>
      </th>
      <td className="px-6 py-4">
        {" "}
        <Image
          src={image}
          width={50}
          height={50}
          alt="This is a Author image"
        />
      </td>

      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td
        className="px-6 py-4 cursor-pointer  flex items-center space-x-2 "
        onClick={() => deleteBlog(mongoId)}
      >
        <span className="bg-neutral-100 p-3 rounded-full hover:bg-black hover:text-white">
          <FaTimes />
        </span>
      </td>
    </tr>
  );
};

export default BlogTable;
