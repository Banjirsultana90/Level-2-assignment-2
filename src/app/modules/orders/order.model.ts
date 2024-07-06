
import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema=new Schema<TOrder>({
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    email: { type: String, required: true },
    productId: { type: String, required: true },
})

export const Order=model('Order',orderSchema)