import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    const DATABASE_URL = process.env.DATABASE as string;
    const DATABESE_NAME = process.env.DATABASE_NAME as string;
  try {
    await mongoose.connect(DATABASE_URL, { dbName: DATABESE_NAME });
    console.log("MongoDB connecter");
    
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;