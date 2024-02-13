window.addEventListener("load", function(event) {
	let deconnectA = document.getElementById('deconnectA');;

	deconnectA.addEventListener("click", function(event) {
		event.preventDefault();

		deconnect(2);
	});

	let cueilleurTable = document.getElementById('cueilleurTable');
	displayTable('cueilleur', cueilleurTable, "../json/json_cueilleur.php");

	let genre = document.getElementById('genre');
	generateSelect("genre", genre, '../json/json_genre.php');

	let cueilleurForm = document.getElementById('cueilleurForm');

	let nom = document.getElementById('nom');
	let date_naissance = document.getElementById('date_naissance');

	cueilleurForm.addEventListener("submit", function(event) {
		event.preventDefault();

		if (nom.value == '' || date_naissance.value == '' || genre.value == '') {
			alert("Aucun champs ne doit etre laisser vide...");
		} else {
			sendData(cueilleurForm, 'POST', '../php/gestion_cueilleur.php');

			id.value = '-1';
			nom.value = '';
			genre.value = '';
			date_naissance.value = '';

			displayTable('cueilleur', cueilleurTable, "../json/json_cueilleur.php");
		}
	});
});