import express from "express";
import { __dirname } from "../server.js";
import path from "path";

const router = express.Router();

router.get("/sales", (req, res) => {
	const salesPath = path.resolve(__dirname, "../public/pages/sales.html");
	res.sendFile(salesPath);
	console.log(__dirname);
});

export default router;
