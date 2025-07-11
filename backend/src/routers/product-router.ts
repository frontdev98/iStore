import productController from "../controllers/product-controller";
import { Router } from "express";

const productRouter = Router();

productRouter.get('/', productController.all);
productRouter.get('/:name', productController.one);
productRouter.post('/', productController.create);

export default productRouter;