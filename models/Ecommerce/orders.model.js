import mongoose from 'mongoose';
const OrderItemSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    orderItems: {
      type: [OrderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'], //choices derahay hai kay ismay say he choose krna hai and also yeh validatation bhi hai kay agar iskay ilawa kuch jaye gha toh enter nhi hoga.
      default: 'PENDING',
    },
  },
  { timestamps: true }
);
export const order = mongoose.model('order', OrderSchema);
