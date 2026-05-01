import mongoose, { Mongoose } from "mongoose";

export type linkType = {
    userName: string,
    passWord: string,
    shortUrl: string,
    longUrl: string
}

const linkSchema = new mongoose.Schema<linkType>({
    userName: {
        type: String,
        unique: true,
        trim: true
    },
    passWord: {
        type: String,
        trim: true
    },
    shortUrl: {
        type: String, 
        unique: true,
        trim: true,
        required: true,
    },
    longUrl: {
        type: String,
        unique: true,
        trim: true,
        required: true
    }
})

export const Link = mongoose.model("Link", linkSchema)