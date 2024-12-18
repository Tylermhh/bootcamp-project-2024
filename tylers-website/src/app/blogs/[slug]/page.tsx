// import connectDB from "@/database/db";
// import BlogModel from "@/database/blogSchema";
// import Comment from "@/components/Comment";
// import style from "./singleBlog.module.css";
// import type { Blog } from "@/database/blogSchema";

// async function getBlog(slug: string): Promise<Blog | null> {
// 	try {
// 		// This fetches the blog from an api endpoint that would GET the blog
// 		const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
// 			cache: "no-store",	
// 		})
// 		// This checks that the GET request was successful
// 		if (!res.ok) {
// 			throw new Error("Failed to fetch blog");
// 		}

// 		return res.json();
// 	} catch (err: unknown) {
// 		console.log(`error: ${err}`);
// 		return null;
// 		// `` are a special way of allowing JS inside a string
// 		// Instead of "error: " + err, we can just do the above
// 		// it is simular to formated strings in python --> f"{err}"
// 	}
// }

// export default async function Blog({ params }: { params: { slug: string } }) {
//   console.log("getting blog data")
//   const blog = await getBlog(params.slug);
  

//   if (blog) {
//     return (
//       <main className={style.blogPage}>
//         <h1 className={style.title}>{blog.title}</h1>
//         <p className={style.date}>
//           {new Date(blog.date).toLocaleDateString("en-US", {
//             month: "long",
//             day: "numeric",
//             year: "numeric",
//           })}
//         </p>
//         <img
//           src={blog.image}
//           alt={blog.imageAlt}
//           className={style.blogImage}
//         />
//         <p className={style.description}>{blog.description}</p>

//         {/* Render comments */}
//         <section className={style.commentsSection}>
//           <h2>Comments</h2>
//           {blog.comments.length > 0 ? (
//             blog.comments.map((comment, index) => (
              
//               <Comment key={index} comment={comment} />
//             ))
//           ) : (
//             <p>No comments yet. Be the first to comment!</p>
//           )}
//         </section>
//       </main>
//     );
//   }

//   // Graceful handling when blog is not found
//   return (
//     <main className={style.blogPage}>
//       <h1>Blog Not Found</h1>
//       <p>We couldn't find the blog you were looking for.</p>
//     </main>
//   );
// }


import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import Comment from "@/components/Comment";
import style from "./singleBlog.module.css";
import type { Blog, IComment } from "@/database/blogSchema";

async function getBlog(slug: string): Promise<Blog | null> {
	try {
		// This fetches the blog from an api endpoint that would GET the blog
		const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
			cache: "no-store",	
		})
		// This checks that the GET request was successful
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
		// `` are a special way of allowing JS inside a string
		// Instead of "error: " + err, we can just do the above
		// it is simular to formated strings in python --> f"{err}"
	}
}

export default async function Blog({ params }: { params: { slug: string } }) {
  console.log("getting blog data");
  const blog = await getBlog(params.slug);

  if (blog) {
    // Remove _id from each comment before passing it to the Comment component
    const cleanedComments: IComment[] = blog.comments.map(({ _id, ...rest }) => rest);

    return (
      <main className={style.blogPage}>
        <h1 className={style.title}>{blog.title}</h1>
        <p className={style.date}>
          {new Date(blog.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <img
          src={blog.image}
          alt={blog.imageAlt}
          className={style.blogImage}
        />
        <p className={style.description}>{blog.description}</p>

        {/* Render comments */}
        <section className={style.commentsSection}>
          <h2>Comments</h2>
          {cleanedComments.length > 0 ? (
            cleanedComments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </section>
      </main>
    );
  }

  return (
    <main className={style.blogPage}>
      <h1>Blog Not Found</h1>
      <p>We couldn't find the blog you were looking for.</p>
    </main>
  );
}
