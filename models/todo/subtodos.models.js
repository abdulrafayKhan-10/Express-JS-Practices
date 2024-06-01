import mongoose from 'mongoose';
const sub_todo = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: [true, 'Title is required'],
    },
    Content: {
      type: String,
      required: [true, 'Content is required'],
    },
    isFinished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const subTodo = mongoose.model('subTodo', sub_todo);
