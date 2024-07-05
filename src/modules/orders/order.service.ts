import { TOrder } from "./order.interface"
import { Order } from "./order.model"


const createOrder=async(payload:TOrder)=>{

    const  result=await Order.create(payload)
    return result

}


// const getAllOrders=async()=>{

//     const  result=await Order.find()
//     return result

// }


const getAllOrders= async (email?: string) => {
    if (email) {
      return await Order.find({ email: { $regex: email, $options: "i" } });
    }
    return await Order.find();
  }

const getOrderById=async(id:any)=>{

    const  result=await Order.findById(id)
    return result

}




export const OrderServices={
    createOrder,
    getAllOrders,
    getOrderById
   

}