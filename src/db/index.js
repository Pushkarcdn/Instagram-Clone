import mongoose from "mongoose";
import config from "../config/index.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${config.mongo.uri}/${config.db.name}`
    );
    console.log(
      `MongoDB Connected: DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`Error while connecting to Mongo: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
