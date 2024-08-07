import express from "express";
import path from "path";
import { __dirname } from "../server.js";
const router = express.Router();

router.get("/pants", (req, res) => {
	const pantsPath = path.resolve(__dirname, "../public/pages/pantalones.html");
	res.sendFile(pantsPath);
});

export default router;
