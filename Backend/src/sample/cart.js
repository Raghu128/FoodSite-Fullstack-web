import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restdata',
    required: true,
  },
  foodImg : {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const cartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  items: [cartItemSchema],
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

cartSchema.pre('save', function (next) {
  this.totalPrice = this.items.reduce((acc, item) => acc + item.total, 0);
  next();
});


const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
