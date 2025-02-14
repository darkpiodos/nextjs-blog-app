import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get("api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center gap-6 my-10 ">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "hover:bg-neutral-200 py-1 px-4 rounded-sm"
          }
        >
          All
        </button>
        <button
          className={
            menu === "Graphic Design"
              ? "bg-black text-white py-1 px-4 rounded-sm "
              : "hover:bg-neutral-200 py-1 px-4 rounded-sm"
          }
          onClick={() => setMenu("Graphic Design")}
        >
          Graphic Design
        </button>
        <button
          className={
            menu === "UI/UX Design"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "hover:bg-neutral-200 py-1 px-4 rounded-sm"
          }
          onClick={() => setMenu("UI/UX Design")}
        >
          UI/UX Design
        </button>
        <button
          className={
            menu === "Web Development"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "hover:bg-neutral-200 py-1 px-4 rounded-sm"
          }
          onClick={() => setMenu("Web Development")}
        >
          Web Development
        </button>
      </div>
      <div className="gap-6 gap-y-8 mb-16 xl:mx-24 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid  max-w-7xl  mx-auto">
        {" "}
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                id={item._id}
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
