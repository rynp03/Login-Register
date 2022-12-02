import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to Database!");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
