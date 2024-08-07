import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const mongoDB = process.env.MONGO_URI;
		await mongoose.connect(mongoDB);
		console.log("Conexion realizada con exito");
	} catch (error) {
		console.log("Error al conectar con MONGODB");
	}
};

export default connectDB;
