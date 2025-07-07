import express from 'express';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import productRouter from './routers/product-router';
import ApiError from './errors/error-api';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

// routers
app.use('/api/product', productRouter);

// error handling
app.use((err: ApiError, req: Request, res: Response, next: Function) => {
    res.status(err.status).json({message: err.message});
    next();
});

try {
    app.listen(PORT, () => console.log(`Server starts on ${PORT}`));
    
} catch (e) {
    console.log(e)
}
