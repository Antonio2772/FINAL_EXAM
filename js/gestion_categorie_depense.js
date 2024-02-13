window.addEventListener("load", function(event) {
	let deconnectA = document.getElementById('deconnectA');;

	deconnectA.addEventListener("click", function(event) {
		event.preventDefault();

		deconnect(2);
	});

	let categorie_depenseTable = document.getElementById('categorie_depenseTable');
	displayTable('categorie_depense', categorie_depenseTable, "../json/json_categorie_depense.php");

	let categorie_depenseForm = document.getElementById('categorie_depenseForm');

	let nom = document.getElementById('nom');

	categorie_depenseForm.addEventListener("submit", function(event) {
		event.preventDefault();

		if (nom.value == '') {
			alert("Aucun champs ne doit etre laisser vide...");
		} else {
			sendData(categorie_depenseForm, 'POST', '../php/gestion_categorie_depense.php');

			id.value = '-1';
			nom.value = '';

			displayTable('categorie_depense', categorie_depenseTable, "../json/json_categorie_depense.php");
		}
	});
});