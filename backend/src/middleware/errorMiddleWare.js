"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundHandler = void 0;
const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Not found the ${req.originalUrl}`
    });
};
exports.notFoundHandler = notFoundHandler;
const errorHandler = (error, req, res, next) => {
    console.log("error", error);
    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Server erver"
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorMiddleWare.js.map