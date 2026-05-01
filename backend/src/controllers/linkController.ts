import { Link } from "../models/linkSchema";
import { Request, Response } from "express";
import {encrypt} from "./../utils/crypto"

export const createLink = async(req: Request, res: Response):Promise<void>=>{
    const {userName, passWord, shortUrl, longUrl} = req.body;
    const existLink = await Link.findOne({shortUrl})    
    if(existLink){
        res.status(400).json({
            success: false,
            message: "This link already exist in the database"
        })
        return;
    }
    const encryptUserName = encrypt(userName);
    const encryptPassWord = encrypt(passWord);

    const link = {
        userName: encryptUserName,
        passWord: encryptPassWord,
        shortUrl,
        longUrl
    }
    await Link.create(link);
    res.status(200).json({
        success: true,
        message: "Successfully create the new link",
        data: link
    })
}

export const getAllLinks = async(req: Request, res:Response):Promise<void> => {
    const links = await Link.find();
    res.status(200).json({
        success: true,
        message: "Successfully get all the links here: ",
        data: links
    })
}

export const getLink = async (req: Request, res: Response): Promise<void> => {
  const shortUrl  = req.params;

  const existLink = await Link.findOne({ shortUrl });

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

export const deleteLink = async(req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    const deleteLink =await Link.findByIdAndDelete(id);
    if(!deleteLink){
        res.status(404).json({
            success: false,
            message: "Can't delete the link"
        })
    }
    res.status(200).json({
        success: true,
        message: "Successfully delete the link"
    })
}
export const updateLink = async(req: Request, res: Response): Promise<void> => {
    const {userName, passWord, shortUrl, longUrl} = req.body;
    const updateLink = await Link.findByIdAndUpdate(req.params, {
        userName,
        passWord,
        shortUrl,
        longUrl
    });
    res.status(200).json({
        success: true,
        message: "Successfully update the link the link",
        data: updateLink
    })
}

export const redictLink = async (
  req: Request,
  res: Response
): Promise<void> => {
  const shortUrl = req.params.shortUrl as string;

  const existLink = await Link.findOne({ shortUrl });

  if (!existLink || !existLink.longUrl) {
    res.status(404).json({
      success: false,
      message: "Can't find the link to redirect",
    });
    return;
  }

  res.redirect(existLink.longUrl);
};