window.addEventListener("load", function(event) {
	let deconnectA = document.getElementById('deconnectA');;

	deconnectA.addEventListener("click", function(event) {
		event.preventDefault();

		deconnect(2);
	});

	let configuration_salaireTable = document.getElementById('configuration_salaireTable');
	displayTable('salaire', configuration_salaireTable, "../json/json_configuration_salaire.php");

	let id_cueilleur = document.getElementById('id_cueilleur');
	generateSelect("cueilleur", id_cueilleur, '../json/json_cueilleur.php');

	let configuration_salaireForm = document.getElementById('configuration_salaireForm');

	let montant = document.getElementById('montant');

	configuration_salaireForm.addEventListener("submit", function(event) {
		event.preventDefault();

		if (id_cueilleur.value == '' || montant.value == '') {
			alert("Aucun champs ne doit etre laisser vide...");
		} else {
			sendData(configuration_salaireForm, 'POST', '../php/configuration_salaire.php');

			id.value = '-1';
			id_cueilleur.value = '';
			montant.value = '';

			displayTable('salaire', configuration_salaireTable, "../json/json_configuration_salaire.php");
		}
	});
});