import style from "./blogs.module.css";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import BlogModel, { Blog } from "@/database/blogSchema";

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs: Blog[] = await getBlogs();

  return (
    <main>
      <div className={style.about}>
        <div className={style.blogPreviews}>
          {blogs.map((blog) => (
            <BlogPreview
              title={blog.title}
              description={blog.description}
              image={blog.image}
              date={blog.date.toLocaleDateString()}
              imageAlt={blog.imageAlt}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
}