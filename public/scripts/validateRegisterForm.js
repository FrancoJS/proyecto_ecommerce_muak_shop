const buttonRegister = document.getElementById("button-register");
const formRegister = document.getElementById("form-register");
const inputsRegister = document.querySelectorAll(".input-register");
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorArrRegister = document.querySelectorAll(".error-register");
const [errorName, errorApellidos, errorEmail, errorPassword] = errorArrRegister;
const [nombre, apellidos, email, password] = inputsRegister;
// TODO MEJORAR VALIDACIONES
buttonRegister.addEventListener("click", (e) => {
	e.preventDefault();
	const nombreValue = nombre.value.trim();
	const apellidosValue = apellidos.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	let isValid = true;

	if (!nombreValue) {
		errorName.textContent = 'El "Nombre" es un campo obligatorio';
		isValid = false;
	}
	if (!apellidosValue) {
		errorApellidos.textContent = 'El campo "Apellidos" es obligatorio';
		isValid = false;
	}
	if (!emailRegex.test(emailValue)) {
		errorEmail.textContent = "Debe ingresar una direccion de correo valida";
		isValid = false;
	}
	if (!emailValue) {
		errorEmail.textContent = 'El "Email" es un campo obligatorio';
		isValid = false;
	}
	if (passwordValue.length < 8) {
		errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres";
		isValid = false;
	}
	if (!passwordValue) {
		errorPassword.textContent = 'La "Contraseña" es un campo obligatorio';
		isValid = false;
	}

	if (isValid) {
		formRegister.submit();
	}
});

nombre.addEventListener("input", (e) => {
	const nombreValue = e.target.value.trim();
	if (nombreValue.length > 30) {
		errorName.textContent = 'El campo "Nombre" debe tener un maximo de 30 caracteres';
		return;
	}
	if (!nombreValue) {
		errorName.textContent = 'El "Nombre" es un campo obligatorio';
	} else {
		errorName.textContent = "";
	}
});

apellidos.addEventListener("input", (e) => {
	const apellidosValue = e.target.value.trim();
	if (apellidosValue.length > 30) {
		errorApellidos.textContent = 'El campo "Apellidos" debe tener un maximo de 30 caracteres';
		return;
	}
	if (!apellidosValue) {
		errorApellidos.textContent = 'El campo "Apellidos" es obligatorio';
	} else {
		errorApellidos.textContent = "";
	}
});

email.addEventListener("input", (e) => {
	const emailValue = e.target.value.trim();
	if (emailRegex.test(emailValue)) {
		errorEmail.textContent = "";
		return;
	}
	if (!emailValue) {
		errorEmail.textContent = 'El "Email" es un campo obligatorio';
	} else {
		errorEmail.textContent = "";
	}
});

password.addEventListener("input", (e) => {
	const passwordValue = e.target.value.trim();
	if (passwordValue.length > 8) {
		errorPassword.textContent = "";
	}
	if (!passwordValue) {
		errorPassword.textContent = 'La "Contraseña" es un campo obligatorio';
	} else {
		errorPassword.textContent = "";
	}
});

//TODO REFACTORIZAR CODIGO
