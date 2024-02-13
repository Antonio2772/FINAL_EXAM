window.addEventListener("load", function(event) {
	const wrapper = document.querySelector(".wrapper"),
	      signupHeader = document.querySelector(".signup header"),
	      loginHeader = document.querySelector(".login header");

	loginHeader.addEventListener("click", () => {
	    wrapper.classList.add("active");
	});
	signupHeader.addEventListener("click", () => {
	    wrapper.classList.remove("active");
	});

	let signupForm = document.getElementById('signupForm');

	let id1 = document.getElementById('id1');
	let password1 = document.getElementById('password1');

	signupForm.addEventListener("submit", function(event) {
		event.preventDefault();

		if (id1.value == '' || password1.value == '') {
			alert("Aucun champs ne doit etre laisser vide...");
		}
		else {
			sendData(signupForm, 'POST', 'php/signup.php');

			id1.value = '';
			password1.value = '';
		}
	});

	let loginForm = document.getElementById('loginForm');

	let id2 = document.getElementById('id2');
	let password2 = document.getElementById('password2');

	let inputs = [id2, password2];

	getDefault("utilisateur", inputs, "json/json_default_user.php");

	loginForm.addEventListener("submit", function(event) {
		event.preventDefault();

		if (id2.value == '' || password2.value == '') {
			alert("Aucun champs ne doit etre laisser vide...");
		} else {
			sendData(loginForm, 'POST', 'php/login.php');
		}
	});
});