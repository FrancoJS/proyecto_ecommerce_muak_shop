import brcypt from "bcrypt";

const SALT_ROUNS = 10;

export const hashPassword = async (password) => {
	return await brcypt.hash(password, SALT_ROUNS);
};

export const comparePassword = async (password, hash) => {
	return await brcypt.compare(password, hash);
};
