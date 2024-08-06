import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { startServer } from "./server.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
export const app = express();

const main = () => {
	startServer({
		port: process.env.PORT,
		public: process.env.PUBLIC_PATH,
	});
};

(async () => {
	main();
})();

app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
