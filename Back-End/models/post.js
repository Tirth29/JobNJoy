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
    photo:{
      public_id: String,
      url: String,
  },
    username: { type: String, required: true },
    caption: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [commentSchema],
    location: { type: String },
  },
  { timestamps: true }
);

<<<<<<< HEAD
export const Post = mongoose.model("Post", postSchema);
=======
export const Post = mongoose.model("Post", postSchema);
>>>>>>> fa76fae3bfae9cfb6a8df2010a5b538abdaf8fa5
