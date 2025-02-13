import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogTable = ({
  author_icon,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const BlogDate = new Date(date);
  return (
    <tr className="bg-white border-b ">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900"
      >
        <Image
          src={author_icon ? author_icon : assets.profile_icon}
          width={40}
          height={40}
          alt="This is a Author image"
        />
        <p>{author ? author : "No Author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td
        className="px-6 py-4 cursor-pointer"
        onClick={() => deleteBlog(mongoId)}
      >
        X
      </td>
    </tr>
  );
};

export default BlogTable;
