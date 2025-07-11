import { Request, Response } from 'express';
import productService from '../services/product-service';
import ApiError from '../errors/error-api';

class ProductController {
    public async all(req: Request, res: Response, next: Function) {
        try {
            const products = await productService.getAll();
            return res.json(products);
        }
        catch(e){
            console.log(e)
            next(e);
        }
    }
    public async one(req: Request, res: Response, next: Function) {
        const name = req.params.name;

        try {
            const product = await productService.getOne(name);

            if (product === null) {
                throw ApiError.NotFound();
            }
            
            return res.json(product);
        }
        catch(e){
            console.log(e)
            next(e);
        }
    }
    public async create(req: Request, res: Response, next: Function) {
        try {
            
        }
        catch(e){
            console.log(e)
            next(e);
        }
    }
    public async update(req: Request, res: Response, next: Function) {
        try {
            
        }
        catch(e){
            console.log(e)
            next(e);
        }
    }
    public async delete(req: Request, res: Response, next: Function) {
        try {
            
        }
        catch(e){
            console.log(e)
            next(e);
        }
    }
}

export default new ProductController();