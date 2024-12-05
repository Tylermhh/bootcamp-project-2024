// db.ts
import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    console.log("Connecting to MongoDB...");
    connection = await mongoose.connect(url);
    console.log("Connected to MongoDB!");
    return connection;
  }
};

export default connectDB;


// // below is just some desperate attempts (dont bother with it)
// import mongoose from "mongoose";

// const url: string = process.env.MONGO_URI as string;
// let connection: typeof mongoose | null = null;


// /**
//  * Makes a connection to a MongoDB database. If a connection already exists, does nothing.
//  * Call this function at the start of API routes and data fetches.
//  * @returns {Promise<typeof mongoose>}
//  */
// const connectDB = async () => {
//   if (!connection) {
//     try {
//       console.log("Connecting to MongoDB...");
//       connection = await mongoose.connect(url); // No options needed for newer Mongoose versions
//       console.log("Connected to MongoDB!");
//     } catch (error) {
//       console.error("Failed to connect to MongoDB:", error);

//       // Optionally, handle retries (e.g., retry after 5 seconds)
//       // await new Promise(resolve => setTimeout(resolve, 5000));
//       // return connectDB();

//       throw new Error("Unable to connect to MongoDB. Please check the connection.");
//     }
//   }
//   return connection;
// };

// export default connectDB;
