import express from "express";
const router = express.Router();
import {
  getMessages,
  sendMesssage,
} from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMesssage);
export default router;
