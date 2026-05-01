"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.env = {
    PORT: process.env.PORT || "3500",
    MONGODB_URI: process.env.MONGODB_URI || "",
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
    SECRET_KEY: process.env.SECRET_KEY
};
//# sourceMappingURL=env.js.map