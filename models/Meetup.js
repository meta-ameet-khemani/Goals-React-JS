import mongoose from "mongoose";

const MeetupSchema = new mongoose.Schema({
  title: String,
  image: String,
  address: String,
  description: String,
});

module.exports = mongoose.models.meetups || mongoose.model("meetups", MeetupSchema);
