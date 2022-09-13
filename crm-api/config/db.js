import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    conn && console.log("MongoDB connection succesfull");
  } catch (error) {
    console.log(error);
  }
};
