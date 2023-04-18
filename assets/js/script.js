let form = document.getElementById('userData');
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputJob = document.getElementById('job');
let inputPhone = document.getElementById('phone');
let inputAbout = document.getElementById('about');
let displayName = document.getElementById('userName');
let displayMail = document.getElementById('userMail');
let displayJob = document.getElementById('userJob');
let displayPhone = document.getElementById('userPhone');
let displayAbout = document.getElementById('userAbout');
let mailPattern = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
let phonePattern = /^(\+?(56)?)(0?9)[987654321]\d{7}$/;

// Constructor para Usuario
function User(name, email, job, phone, about) {
	this.name = name;
	this.email = email;
	this.job = job;
	this.phone = phone;
	this.about = about;
}
let validarInput = (input, pattern) => {
	return pattern.test(input);
};

let llenarCard = (user) => {
	displayName.innerHTML = user.name;
	displayMail.innerHTML = user.email;
	displayJob.innerHTML = user.job;
	displayPhone.innerHTML = user.phone;
	displayAbout.innerHTML = user.about;
};

form.addEventListener('submit', (event) => {
	event.preventDefault();
	// Construye usuario con datos capturados del form
	if (
		validarInput(inputEmail.value, mailPattern) &&
		validarInput(inputPhone.value, phonePattern)
	) {
		var usuario = new User(
			inputName.value,
			inputEmail.value,
			inputJob.value,
			inputPhone.value,
			inputAbout.value
		);
		llenarCard(usuario);
	} else {
		alert('Asegúrese de llenar los datos de Email y Teléfono');
	}
});
