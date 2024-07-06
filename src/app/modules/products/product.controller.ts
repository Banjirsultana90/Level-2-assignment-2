/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express"
import { ProductServices } from "./product.service"
import { Tproduct } from './product.interface';
import productValidationSchema from "./product.vallidation";



const createProducts =async(req:Request,res:Response)=>{
  try {
    const productData=req.body

    const zodparseData=productValidationSchema.parse(productData)
    const result= await ProductServices.createProducts(zodparseData)
    res.json({
     success:true,
     message:"Product is created successfully!",
     data:result
 
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not create products!",
      error: err,
    });
  }
};
 
 
 
 const getAllProducts = async (req: Request, res: Response) => {
    try {
      const { searchTerm } = req.query;
      const result = await ProductServices.getAllproducts(searchTerm as string);
      if (!result || result.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Product not found!",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Products are fetched successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not fetch products!",
        error: err,
      });
    }
  };

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductById(productId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product is fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch product!",
      error: err,
    });
  }
};
  const dleteProductById = async (req: Request, res: Response) => {
    try {
        const {productId}=req.params
      const result = await ProductServices.dleteProductById(productId);
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Product not found!",
        });
      }
      res.status(200).json({
        success: true,
        message: "Product is deleted successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not delete product!",
        error: err,
      });
    }
  };
  const   updateProductbyId = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      const updatedData: Tproduct = req.body;

      const validatedData = productValidationSchema.parse(updatedData);
      

    const result = await ProductServices.updateProductbyId(productId, validatedData);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
      res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not update product!",
        error: err,
      });
    }
  };
  

 export const ProductController={
    createProducts,
    getAllProducts,
    getProductById,
    dleteProductById,
    updateProductbyId
 }