import { hashPassword } from "../services/password.services.js";

// middleware register
export const register = async (req, res) => {
	const { nombre, apellidos, email, password } = req.body;

	const hashedPassword = hashPassword(password);
	console.log(nombre);
};
