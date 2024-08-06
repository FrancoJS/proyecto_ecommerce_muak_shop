const buttonRegister = document.getElementById("button-register");
const formRegister = document.getElementById("form-register");
const inputsRegister = document.querySelectorAll(".input-register");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorArr = document.querySelectorAll(".error-register");
const [errorName, errorApellidos, errorEmail, errorPassword] = errorArr;
// TODO MEJORAR VALIDACIONES
buttonRegister.addEventListener("click", (e) => {
	e.preventDefault();
	let isValid = true;
	const nombre = inputsRegister[0].value.trim();
	const apellidos = inputsRegister[1].value.trim();
	const email = inputsRegister[2].value.trim();
	const password = inputsRegister[3].value.trim();
	if (!nombre) {
		errorName.textContent = 'El "Nombre" es un campo obligatorio';
		isValid = false;
	}
	if (!apellidos) {
		errorApellidos.textContent = 'El campo "Apellidos" es obligatorio';
		isValid = false;
	}
	if (!emailRegex.test(email)) {
		errorEmail.textContent = "Debe ingresar una direccion de correo valida";
		isValid = false;
	}
	if (!email) {
		errorEmail.textContent = 'El "Email" es un campo obligatorio';
		isValid = false;
	}
	if (password.length < 8) {
		errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres";
		isValid = false;
	}
	if (!password) {
		errorPassword.textContent = 'La "Contraseña" es un campo obligatorio';
		isValid = false;
	}
	if (isValid) {
		formRegister.submit();
	}
});
