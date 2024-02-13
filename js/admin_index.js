window.addEventListener("load", function(event) {
	let adminForm = document.getElementById('adminForm');

	let login_nom = document.getElementById('login_nom');
	let login_pass = document.getElementById('login_pass');

	let inputs = [login_nom, login_pass];

	getDefault("admin", inputs, "../json/json_default_admin.php");

	adminForm.addEventListener("submit", function(event) {
		event.preventDefault();

		if (login_nom.value == '' || login_pass.value == '') {
			alert("Aucun champs ne doit etre laisser vide...");
		} else {
			sendData(adminForm, 'POST', '../php/admin_login.php');
		}
	});
});