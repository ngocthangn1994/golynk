import {Request, Response, NextFunction} from "express";

export const notFoundHandler = (req: Request, res: Response, next: NextFunction):void => {
    res.status(404).json({
        success: false,
        message: `Not found the ${req.originalUrl}`
    })
}

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction):void=> {
    console.log("error", error);
    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Server erver"
    })
}