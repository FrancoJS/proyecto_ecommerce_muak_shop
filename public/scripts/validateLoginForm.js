import { emailRegex } from "./validateRegisterForm.js";
const buttonLogin = document.getElementById("button-login");
const inputsLogin = document.querySelectorAll(".input-login");
const formLogin = document.getElementById("form-login");
const errArrLogin = document.querySelectorAll(".error-login");
const [errorEmail, errorPassword] = errArrLogin;
const [email, password] = inputsLogin;

buttonLogin.addEventListener("click", (e) => {
	e.preventDefault();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	let isValid = true;
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
		formLogin.submit();
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
