window.addEventListener("load", function(event) {
	let deconnectA = document.getElementById('deconnectA');;

	deconnectA.addEventListener("click", function(event) {
		event.preventDefault();

		deconnect(2);
	});

	let parcelleTable = document.getElementById('parcelleTable');
	displayTable('parcelle', parcelleTable, "../json/json_parcelle.php");

	let id_variete_the = document.getElementById('id_variete_the');
	generateSelect("variete_the", id_variete_the, '../json/json_variete_the.php');

	let parcelleForm = document.getElementById('parcelleForm');

	let numero = document.getElementById('numero');
	let surface = document.getElementById('surface');

	parcelleForm.addEventListener("submit", function(event) {
		event.preventDefault();

		if (numero.value == '' || surface.value == '' || id_variete_the.value == '') {
			alert("Aucun champs ne doit etre laisser vide...");
		} else {
			sendData(parcelleForm, 'POST', '../php/gestion_parcelle.php');

			id.value = '-1';
			numero.value = '';
			surface.value = '';
			id_variete_the.value = '';

			displayTable('parcelle', parcelleTable, "../json/json_parcelle.php");
		}
	});
});