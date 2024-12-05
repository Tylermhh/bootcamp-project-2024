"use client"; // This marks the file as a client component

import React, { useEffect, useState } from "react";
import style from "./blogs.module.css";
// import { blogs } from "@/app/blogData";
import BlogPreview from '@/components/blogPreview';
import connectDB from "@/database/db";

// comment this out to try the modified version. uncomment for bootcamp version
import Blog from "@/database/blogSchema";

// // uncomment these to try the modified version and swap the commented and uncommented getBlogs functions below
// import { getBlogModel } from "@/database/blogSchema";
// import { Blog } from "@/database/blogSchema";


// bootcamp version
async function getBlogs(){
  console.log("Connecting to db")
	await connectDB() // function from db.ts before
  console.log("Connected")

	try {
    console.log("Fetching blogs")
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail()
    // send a response as the blogs as the message
    console.log("Successfully fetched blogs")
    return blogs
	} catch (err) {
    console.error("Failed to fetch blogs:", err); // Log the error
	  return []
	}
}

// // modified version that gives me "connect is not a function" error
// async function getBlogs() {
//   console.log("Connecting to db");
//   try {
//       const Blog = await getBlogModel(); // Get the Blog model after ensuring connection
//       console.log("Connected");

//       console.log("Fetching blogs");
//       // Query for all blogs and sort by date
//       const blogs = await Blog.find().sort({ date: -1 }).orFail();
//       console.log("Successfully fetched blogs");
//       return blogs;
//   } catch (err) {
//       console.error("Failed to fetch blogs:", err); // Log the error
//       return [];
//   }
// }

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBlogs()
      .then(data => setBlogs(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error loading blogs: {error}</p>;
  
  return (
    <main>
        <div className={style.about}>
            <div className={style.blogPreviews}>
                {blogs.map(blog => 
                  <BlogPreview 
                    title={blog.title}
                    description={blog.description}
                    image={blog.image}
                    date={blog.date.toLocaleDateString()}
                    imageAlt={blog.imageAlt} 
                    slug={blog.slug}                  
                  />
                 )}
            </div>
        </div>
    </main>
  );
}