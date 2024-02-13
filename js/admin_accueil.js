window.addEventListener("load", function(event) {
	let lead = document.getElementById('lead');

	getDefault("lead", lead, "../json/json_admin.php");

	let deconnectA = document.getElementById('deconnectA');;

	deconnectA.addEventListener("click", function(event) {
		event.preventDefault();

		deconnect(2);
	});
});