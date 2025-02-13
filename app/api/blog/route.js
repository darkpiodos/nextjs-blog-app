import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
const { NextResponse } = require("next/server");
const fs = require("fs");
// Ensure database is connected for every request
// Api End point to get all blogs
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// API Endpoint for Uploading Blog
export async function POST(request) {
  try {
    await ConnectDB(); // Connect to the database

    const formData = await request.formData();
    console.log("FormData received:", formData);

    const timestamp = Date.now();

    const image = formData.get("image");
    if (!image) {
      throw new Error("Image is required");
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/uploads/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/uploads/${timestamp}_${image.name}`;

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
    };

    console.log("Blog data to be saved:", blogData);

    await BlogModel.create(blogData);
    console.log("Blog saved!");
    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.error("POST request error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Creating API Endpoint for delete blog

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public/uploads${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" });
}
