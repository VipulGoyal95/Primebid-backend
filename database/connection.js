import mongoose from "mongoose";

export const connection = () => {
  // console.log(process.env.MONGODB_URL);
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: "MERN_AUCTION_PLATFORM",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};
