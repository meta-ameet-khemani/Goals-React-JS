import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // const opts = {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   bufferCommands: false,
      //   bufferMaxEntries: 0,
      //   useFindAndModify: true,
      //   useCreateIndex: true,
    // };

    cached.promise = mongoose.connect(MONGODB_URL).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
