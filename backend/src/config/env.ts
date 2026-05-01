import dotenv from "dotenv";

dotenv.config();

export const env = {
    PORT: process.env.PORT || "3500",
    MONGODB_URI: process.env.MONGODB_URI || "",
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
    SECRET_KEY: process.env.SECRET_KEY
}