/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tproduct } from "./product.interface"
import { Product } from "./product.model"


const createProducts=async(payload:Tproduct)=>{
    const  result=await Product.create(payload)
    return result

}

const getAllproducts= async (searchTerm?: string) => {
    if (searchTerm) {
      return await Product.find({ name: { $regex: searchTerm, $options: "i" } });
    }
    return await Product.find();
  }


const getProductById=async(id:any)=>{
    const  result=await Product.findById(id)
    return result

}
const dleteProductById=async(id:any)=>{
    const  result=await Product.findByIdAndDelete(id)
    return result

}
const  updateProductbyId=async(productId: string, updatedData: Tproduct)=>{
    return await Product.findByIdAndUpdate( productId,
                 { $set: updatedData },
                { new: true });

}

export const ProductServices={
    createProducts,
    getAllproducts,
    getProductById,
    dleteProductById,
    updateProductbyId

}