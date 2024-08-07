import { comparePassword, hashPassword } from "../services/password.services.js";
import User from "../models/userModel.js";

// middleware register
export const register = async (req, res) => {
	const { nombre, apellidos, email, password } = req?.body;
	const hashedPassword = await hashPassword(password);
	try {
		const newUser = await User.create({
			nombre,
			apellidos,
			email,
			password: hashedPassword,
		});
		res.status(201).json({
			message: "El usuario se registro con exito",
		});
	} catch (error) {
		res.status(400).json({ message: "El usuario ya se encuentra registrado" });
	}
};

export const login = async (req, res) => {
	const { email, password } = req?.body;
	const user = await User.findOne({ email });
	if (!user) {
		res.status(404).json({ message: "El usuario no se encuentra resgistrado" });
		return;
	}
	const passwordMatch = await comparePassword(password, user.password);
	if (!passwordMatch) {
		res.status(400).json({ message: "El usuario o la contraseña son incorrectos" });
		return;
	}
	res.status(200).json({ message: "Inicio de sesion exitoso" });
};
