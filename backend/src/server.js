"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./config/env");
const db_1 = require("./config/db");
const linkRoutes_1 = __importDefault(require("./routes/linkRoutes"));
const redirectLink_1 = __importDefault(require("./routes/redirectLink"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: env_1.env.CLIENT_URL,
    credentials: true,
}));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "GoLink backend server is running",
    });
});
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "GoLink backend is healthy",
    });
});
// API routes first
app.use("/api/links", linkRoutes_1.default);
// Redirect routes after API routes
app.use("/go", redirectLink_1.default);
const startServer = async () => {
    await (0, db_1.connectDB)();
    app.listen(Number(env_1.env.PORT), () => {
        console.log(`Server is listening at http://localhost:${env_1.env.PORT}`);
    });
};
startServer();
//# sourceMappingURL=server.js.map