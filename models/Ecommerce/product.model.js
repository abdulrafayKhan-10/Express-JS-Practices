import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    p_name: {
      type: String,
      required: true,
      unique: true,
    },
    p_price: {
      type: Number,
      default: 0,
    },
    p_stock: {
      type: Number,
      default: 0,
    },
    p_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
    p_owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { timestamps: true }
);
export const product = mongoose.model('product', productSchema);
