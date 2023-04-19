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

inputData.addEventListener('submit', (event) => {
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
		rellenarCard(usuario);
	} else {
		alert('Asegúrese de llenar los datos de Email y Teléfono');
	}
});

let validarInput = (input, pattern) => {
	return pattern.test(input);
};

// Rellena card con datos capturados
let rellenarCard = (cliente) => {
	userName.innerHTML = cliente.name;
	userMail.innerHTML = cliente.email;
	userJob.innerHTML = cliente.job;
	userPhone.innerHTML = cliente.phone;
	userAbout.innerHTML = cliente.about;
};
