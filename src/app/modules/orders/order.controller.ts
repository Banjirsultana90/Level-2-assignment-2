/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express"
import { OrderServices } from "./order.service";
import { ProductServices } from "../products/product.service";
import orderValidationSchema from "./order.vallidation";

const createOrder =async(req:Request,res:Response)=>{
  
    try {
        const orderData = req.body;

    const validatedData = orderValidationSchema.parse(orderData);

    // Check whether the product exists
    const product = await ProductServices.getProductById(validatedData.productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    // Check if the ordered quantity exceeds available quantity
    if (product.inventory.quantity < validatedData.quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    // Update the inventory quantity and inStock status as requirements
    product.inventory.quantity -= validatedData.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();

    const result = await OrderServices.createOrder(validatedData);

    res.json({
      success: true,
      message: "Order is created successfully!",
      data: result,
    });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not create order!",
            error: err.message,
        });
    }
 
 }
 const getAllOrders = async (req: Request, res: Response) => {
    try {
        const { email } = req.query
        const result = await OrderServices.getAllOrders(email as string);
    if (!result || result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Orders not found",
      
      });
    }
      res.status(200).json({
        success: true,
        message: "Orders are fetched successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Orders not found",
        error: err,
      });
    }
  };
  const getOrderById = async (req: Request, res: Response) => {
    try {
        const {orderId}=req.params
      const result = await OrderServices.getOrderById(orderId);
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Order not found!",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Order is fetched successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not fetch Orders!",
        error: err,
      });
    }
  };

 export const OrderController={
    createOrder,
    getAllOrders,
    getOrderById,
   
 }