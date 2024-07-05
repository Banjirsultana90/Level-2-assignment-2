import  express, { Request, Response }  from 'express';
import { Product } from './product.model';
import { ProductController } from './product.controller';
const router=express.Router()
router.post('/',ProductController.createProducts)
router.get('/',ProductController.getAllProducts)
router.get('/:productId',ProductController.getProductById)
router.delete('/:productId',ProductController.dleteProductById)
router.put('/:productId',ProductController.updateProductbyId)
export const ProductRoutes=router