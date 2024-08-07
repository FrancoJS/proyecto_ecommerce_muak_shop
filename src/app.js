import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { startServer } from "./server.js";
import authRoutes from "./routes/authRoutes.js";
import salesRoute from "./routes/salesRoute.js";
import pantsRoute from "./routes/pantsRoute.js";
import skirtRoute from "./routes/skirtRoute.js";
import connectDB from "./config/database.js";

dotenv.config();
export const app = express();
connectDB();

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
app.use("/shop", salesRoute);
app.use("/shop", pantsRoute);
app.use("/shop", skirtRoute);
