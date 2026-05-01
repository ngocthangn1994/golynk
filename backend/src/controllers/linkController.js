"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redictLink = exports.updateLink = exports.deleteLink = exports.getLink = exports.getAllLinks = exports.createLink = void 0;
const linkSchema_1 = require("../models/linkSchema");
const crypto_1 = require("./../utils/crypto");
const createLink = async (req, res) => {
    const { userName, passWord, shortUrl, longUrl } = req.body;
    const existLink = await linkSchema_1.Link.findOne({ shortUrl });
    if (existLink) {
        res.status(400).json({
            success: false,
            message: "This link already exist in the database"
        });
        return;
    }
    const encryptUserName = (0, crypto_1.encrypt)(userName);
    const encryptPassWord = (0, crypto_1.encrypt)(passWord);
    const link = {
        userName: encryptUserName,
        passWord: encryptPassWord,
        shortUrl,
        longUrl
    };
    await linkSchema_1.Link.create(link);
    res.status(200).json({
        success: true,
        message: "Successfully create the new link",
        data: link
    });
};
exports.createLink = createLink;
const getAllLinks = async (req, res) => {
    const links = await linkSchema_1.Link.find();
    res.status(200).json({
        success: true,
        message: "Successfully get all the links here: ",
        data: links
    });
};
exports.getAllLinks = getAllLinks;
const getLink = async (req, res) => {
    const shortUrl = req.params;
    const existLink = await linkSchema_1.Link.findOne({ shortUrl });
    if (!existLink) {
        res.status(404).json({
            success: false,
            message: "Link does not exist on the system",
        });
        return;
    }
    res.status(200).json({
        success: true,
        message: "The link here",
        data: existLink,
    });
};
exports.getLink = getLink;
const deleteLink = async (req, res) => {
    const { id } = req.params;
    const deleteLink = await linkSchema_1.Link.findByIdAndDelete(id);
    if (!deleteLink) {
        res.status(404).json({
            success: false,
            message: "Can't delete the link"
        });
    }
    res.status(200).json({
        success: true,
        message: "Successfully delete the link"
    });
};
exports.deleteLink = deleteLink;
const updateLink = async (req, res) => {
    const { userName, passWord, shortUrl, longUrl } = req.body;
    const updateLink = await linkSchema_1.Link.findByIdAndUpdate(req.params, {
        userName,
        passWord,
        shortUrl,
        longUrl
    });
    res.status(200).json({
        success: true,
        message: "Successfully update the link the link",
        data: updateLink
    });
};
exports.updateLink = updateLink;
const redictLink = async (req, res) => {
    const shortUrl = req.params.shortUrl;
    const existLink = await linkSchema_1.Link.findOne({ shortUrl });
    if (!existLink || !existLink.longUrl) {
        res.status(404).json({
            success: false,
            message: "Can't find the link to redirect",
        });
        return;
    }
    res.redirect(existLink.longUrl);
};
exports.redictLink = redictLink;
//# sourceMappingURL=linkController.js.map