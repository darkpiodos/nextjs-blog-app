"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../../app/globals.css";
const Page = () => {
  const [image, setImage] = useState(null); // Initialize with null for consistency

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Graphic Design",
    author: "Darwin Piodos",
    authorImg: "/author_icon.png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(null);
      setData({
        title: "",
        description: "",
        category: "Graphic Design",
        author: "Darwin Piodos",
        authorImg: "/author_icon.png",
      });
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            alt="This is an upload area"
            height={70}
            className="mt-4 cursor-pointer"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
          className="cursor-pointer"
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          placeholder="Type here"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          placeholder="Write content here"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          rows={6}
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-50 mt-4 px-4 py-3 border rounded-sm"
        >
          <option value="Graphic Design" className="option-hover rounded-none">
            Graphic Design
          </option>
          <option className="option-hover" value="UI/UX Design">
            UI/UX Design
          </option>
          <option className="option-hover" value="Web Development">
            Web Development
          </option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>
    </>
  );
};

export default Page;
