import { Request, Response } from 'express';
import productService from '../services/product-service';
import ApiError from '../errors/error-api';

class ProductController {
    async one(req: Request, res: Response, next: Function): Promise<any>{
        const name = req.params.name;

        try {
            const product = await productService.getOne(name);

            if (product === null) {
                throw ApiError.NotFound();
            }
            
            return res.json(product);
        
        } catch (e) {
            next(e);
        }
    }

    async all(req: Request, res: Response, next: Function): Promise<any> {
        try {
            const products = await productService.getAll();
            return res.json(products);
        
        } catch (e) {
            next(e);
        }
    }
}

export default new ProductController();