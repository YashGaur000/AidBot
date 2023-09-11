import express from "express";
import { Controllers } from "./controller.js";

const UserRoutes = express.Router();
UserRoutes.post("/chat",Controllers.Chat);
export default UserRoutes;