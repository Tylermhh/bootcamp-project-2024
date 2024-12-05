// // modified version to bypass the issue of running this before connectDB. Uncomment to try. also have to uncomment some imports in blog's page.tsx
// // this version gets to connectDB but gives "connect is not a function" error instead

// import mongoose, { Schema } from "mongoose";
// import connectDB from "./db";

// export type Blog = {
//     title: string;
//     date: Date;
//     description: string;
//     image: string;
//     imageAlt: string;
//     slug: string; // A slug is a URL name used to redirect to a specific page
// };

// const blogSchema = new Schema<Blog>({
//     title: { type: String, required: true },
//     date: { type: Date, required: false, default: () => new Date() }, // Use a function for dynamic default
//     description: { type: String, required: true },
//     image: { type: String, required: true }, 
//     imageAlt: { type: String, required: true }, 
//     slug: { type: String, required: true }
// });

// // Lazily initialize the Blog model
// let Blog: mongoose.Model<Blog> | null = null;

// export async function getBlogModel() {
//     await connectDB(); // Ensure DB connection is established
//     if (!Blog) {
//         Blog = mongoose.models.blogs || mongoose.model<Blog>('blogs', blogSchema);
//     }
//     return Blog;
// }


// original version from bootcamp (runs into the issue of trying to run this code before connectDB in blog's page.tsx)
// comment out everything in the bottom and uncomment everything above to try the modified version that doesnt have this issue
import mongoose, { Schema } from "mongoose";

type Blog = {
    title: string;
    date: Date;
    description: string;
    image: string;
    imageAlt: string;
    slug: string; // A slug is a URL name used to redirect to a specific page
};

const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    date: { type: Date, required: false, default: () => new Date() }, // Use a function for dynamic default
    description: { type: String, required: true },
    image: { type: String, required: true }, // Added type declaration
    imageAlt: { type: String, required: true }, // Added to match Blog type
    slug: { type: String, required: true }
});



console.log("this is getting called before connectDB in blogs page.tsx because of the import")
console.log(mongoose.models)

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);


// Ensure that mongoose model is defined only once
// const Blog = mongoose.models.blogs || mongoose.model<Blog>('blogs', blogSchema);

export default Blog;