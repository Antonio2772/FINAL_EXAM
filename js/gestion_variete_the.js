window.addEventListener("load", function(event) {
	let deconnectA = document.getElementById('deconnectA');;

	deconnectA.addEventListener("click", function(event) {
		event.preventDefault();

		deconnect(2);
	});
	
	let variete_theTable = document.getElementById('variete_theTable');
	displayTable('variete_the', variete_theTable, "../json/json_variete_the.php");

	let variete_theForm = document.getElementById('variete_theForm');

	let id = document.getElementById("id");
	let nom = document.getElementById("nom");
	let occupation = document.getElementById("occupation");
	let rendement = document.getElementById("rendement");

	variete_theForm.addEventListener("submit", function(event) {
		event.preventDefault();

		if (nom.value == '' || occupation.value == '' || rendement.value == '') {
			alert("Aucun champs ne doit etre laisser vide...");
		} else {
			sendData(variete_theForm, 'POST', '../php/gestion_variete_the.php');

			id.value = '-1';
			nom.value = '';
			occupation.value = '';
			rendement.value = '';

			displayTable('variete_the', variete_theTable, "../json/json_variete_the.php");
		}
	});

});