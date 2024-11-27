import React from "react";
import style from "./blogs.module.css";
import { blogs } from "@/app/blogData";
import BlogPreview from '@/components/blogPreview';

export default function BlogsPage() {
  return (
    <main>
        <div className={style.about}>
            <div className={style.blogPreviews}>
                {blogs.map(blog => 
                  <BlogPreview 
                    title={blog.title}
                    description={blog.description}
                    image={blog.image}
                    date={blog.date} 
                    imageAlt={blog.imageAlt} 
                    slug={blog.slug}                  
                  />
                 )}
            </div>
        </div>
    </main>
  );
}