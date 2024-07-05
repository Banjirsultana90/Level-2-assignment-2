import mongoose, { Schema, model } from "mongoose";
import { Tinventory, Tproduct, Tvariant } from "./product.interface";

const variantSchema = new Schema<Tvariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<Tinventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
});
const productSchema = new Schema<Tproduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema] },
  inventory: { type: inventorySchema },
});


export const Product=model('Product',productSchema)