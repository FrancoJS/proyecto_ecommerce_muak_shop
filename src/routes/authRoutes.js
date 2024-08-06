import express from "express";
import { __dirname } from "../server.js";
import path from "path";
import { login, register } from "../controllers/authController.js";
const router = express.Router();

router.get("/", (req, res) => {
	const pathLoginRegister = path.join(__dirname, "../public/pages/login-register.html");
	res.sendFile(pathLoginRegister);
});

router.post("/register", register);
router.post("/login", login);

export default router;
