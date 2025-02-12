import mongoose from "mongoose";
require("dotenv").config();

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the Database!");
  } catch (error) {
    console.error("Connection Failed!", error);
  }
};
