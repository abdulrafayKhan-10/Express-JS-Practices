import mongoose from 'mongoose';
const todo = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: [true, 'Title is required'],
    },
    isFinished: {
      type: Boolean,
      default: false,
    },
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    Subtodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTodo',
        required: true,
      },
    ],
  },
  { timestamps: true }
);
export const Todo = mongoose.model('Todo', todo);
