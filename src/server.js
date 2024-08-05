import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { app } from "./app.js";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const startServer = (options) => {
	const { port, public_path = "public" } = options;
	app.use(express.static(public_path));

	app.get("/", (req, res) => {
		console.log(__dirname);
		const indexPath = path.resolve(__dirname, `../${public_path}/index.html`);
		res.sendFile(indexPath);
	});

	app.listen(port, () => {
		console.log(`escuchando puerto ${port}`);
	});
};
