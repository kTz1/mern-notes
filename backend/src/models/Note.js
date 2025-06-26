import mongoose from "mongoose";

// Create a schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

// Model base on a schema
const Note = mongoose.model("Note", noteSchema);

export default Note;
