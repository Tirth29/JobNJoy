import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment_text: { type: String, required: true },
    comment_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  });

const reelSchema = mongoose.Schema(
  {
    reel: {
      public_id: String,
      url: String,
    },
    username: { type: String, required: true },
    caption: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [commentSchema],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

export const Reels = mongoose.model("Reels", reelSchema);
