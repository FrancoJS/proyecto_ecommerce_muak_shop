import brcypt from "bcrypt";

const SALT_ROUNS = 10;

export const hashPassword = async (password) => {
	return await brcypt.hash(password, SALT_ROUNS);
};
