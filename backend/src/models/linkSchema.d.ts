import mongoose from "mongoose";
export type linkType = {
    userName: string;
    passWord: string;
    shortUrl: string;
    longUrl: string;
};
export declare const Link: mongoose.Model<linkType, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, linkType, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<linkType & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<linkType, mongoose.Model<linkType, any, any, any, any, any, linkType>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, linkType, mongoose.Document<unknown, {}, linkType, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<linkType & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userName?: mongoose.SchemaDefinitionProperty<string, linkType, mongoose.Document<unknown, {}, linkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<linkType & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    passWord?: mongoose.SchemaDefinitionProperty<string, linkType, mongoose.Document<unknown, {}, linkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<linkType & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    shortUrl?: mongoose.SchemaDefinitionProperty<string, linkType, mongoose.Document<unknown, {}, linkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<linkType & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    longUrl?: mongoose.SchemaDefinitionProperty<string, linkType, mongoose.Document<unknown, {}, linkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<linkType & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, linkType>, linkType>;
//# sourceMappingURL=linkSchema.d.ts.map