import mongoose, { Schema } from "mongoose";

const songSchema = new Schema({
  title: {
    type: String,
  },
  image: { type: String },
  artist: { type: String },
  genre: { type: String },
  fileUrl: { type: String },
});

const Song = mongoose.model("Song", songSchema);

export default Song;
