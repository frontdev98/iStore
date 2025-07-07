import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routers/product-router';
import { errorMiddleware } from './middlewares/error-middleware';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

// routers
app.use('/api/product', productRouter);

// error handling
app.use(errorMiddleware);

try {
    app.listen(PORT, () => console.log(`Server starts on ${PORT}`));
    
} catch (e) {
    console.log(e)
}
