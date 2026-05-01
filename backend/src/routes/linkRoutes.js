"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linkController_1 = require("../controllers/linkController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", linkController_1.getAllLinks);
router.get("/:id", linkController_1.getLink);
router.post("/", linkController_1.createLink);
router.put("/:id", linkController_1.updateLink);
router.delete("/:id", linkController_1.deleteLink);
exports.default = router;
//# sourceMappingURL=linkRoutes.js.map