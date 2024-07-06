import { TOrder } from "./order.interface"
import { Order } from "./order.model"


const createOrder=async(payload:TOrder)=>{
    const  result=await Order.create(payload)
    return result
}
const getAllOrders= async (email?: string) => {
    if (email) {
      return await Order.find({ email: { $regex: email, $options: "i" } });
    }
    return await Order.find();
  }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getOrderById=async(id:any)=>{

    const  result=await Order.findById(id)
    return result

}
export const OrderServices={
    createOrder,
    getAllOrders,
    getOrderById
   

}