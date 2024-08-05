import express from "express";
import { __dirname } from "../server.js";
import path from "path";
const router = express.Router();

router.get("/login-register", (req, res) => {
	const pathLoginRegister = path.join(__dirname, "../public/pages/login-register.html");
	res.sendFile(pathLoginRegister);
});

export default router;
