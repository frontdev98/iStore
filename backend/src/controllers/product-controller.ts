import { Request, Response } from 'express';
import productService from '../services/product-service';

class ProductController {
    async one(req: Request, res: Response, next: Function): Promise<any>{
        const name = req.params['product-name'];
        console.log(name);

        try {
            const product = await productService.getOne(name);
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