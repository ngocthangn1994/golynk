import { createLink, getLink, getAllLinks, deleteLink, updateLink } from "../controllers/linkController";
import express from "express"

const router = express.Router();

router.get("/", getAllLinks);
router.get("/:id", getLink);
router.post("/", createLink);
router.put("/:id", updateLink);
router.delete("/:id", deleteLink)

export default router;