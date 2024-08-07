import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	nombre: {
		type: String,
		require: true,
	},
	apellidos: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
});

const User = mongoose.model("User", userSchema);

export default User;
