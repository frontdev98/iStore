import { Request, Response } from "express";
import ApiError from "../errors/error-api";

export function errorMiddleware(err: ApiError, req: Request, res: Response, next: Function): any{
    return res.status(err.status).json({message: err.message});
}