import express from "express";
import { redictLink } from "../controllers/linkController";

const router = express.Router();

router.get("/:shortUrl", redictLink);

export default router;