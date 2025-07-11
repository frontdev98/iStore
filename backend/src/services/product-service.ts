import { PrismaClient } from "../../prisma/src/generated/prisma";
import productDTO from "../dtos/product-dto";

const db = new PrismaClient();

class ProductService {
    async getAll(): Promise<productDTO[] | []> {
        const products = await db.product.findMany({
            select: {
                name: true,
                price: true,
                year: true
            }
        });
        return products;
    }

    async getOne(name: string): Promise<productDTO|null> {
        const product_ = await db.product.findUnique({
            where: {name},
            select: {
                name: true,
                price: true,
                year: true
            }
        });

        return product_;
    }

    async create(data: productDTO): Promise<productDTO> {
        const product_ = await db.product.create({data});
        const dto = {...product_};
        return dto;
    }

    async update(data: productDTO): Promise<productDTO> {
        const product_ = await db.product.update({
            where: {
                name: data.name
            },
            data
        });
        const dto = {...product_};
        return dto;
    }

    async delete(name: string): Promise<productDTO> {
        const product_ = await db.product.delete({
            where: {name}
        });
        const dto = {...product_};
        return dto;
    }
}

const productService = new ProductService();

export default productService;