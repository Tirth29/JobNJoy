import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  comment_text: { type: String, required: true },
  comment_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
                                                                                                       
const postSchema = new mongoose.Schema(
  {
    photo: { type: String, required: true},
    username: { type: String, required: true },
    caption: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
