<?php
require 'functions.php';

session_start();
if (!isset($_SESSION['id_admin'])) {
	$return = [-2, "An Error occured: Admin not connected, retry to connect..."];

	echo json_encode($return);
} else {
	if (isset($_POST['mode'])) {
		if ($_POST['mode'] == 'update') {
			$update = getElementById($_POST['id'], 'salaire');
			if (is_null($update)) {
				$return = [0, "An Error occured: Salary with id ".$_POST['id']." not found..."];
			} else {
				$return = [8, $update];
			}

		} elseif($_POST['mode'] == 'delete') {
			$delete = deleteElementById($_POST['id'], 'salaire');
			if ($delete == true) {
				$return = [1, "Salary Deleted as successfully!"];
			} else {
				$return = [0, $delete];
			}

		}
	} else {
		if ($_POST['id'] == -1) {
			$insert = salaireInsert($_POST['id_cueilleur'], $_POST['montant'], $_POST['date_salaire']);
			if ($insert == true) {
				$return = [1, "Salary Inserted as successfully!"];
			} else {
				$return = [0, $insert];
			}
		} else {
			$update = salaireUpdate($_POST['id'], $_POST['id_cueilleur'], $_POST['montant'], $_POST['date_salaire']);
			if ($update == true) {
				$return = [1, "Salary Updated as successfully!"];
			} else {
				$return = [0, $update];
			}
		}
	}

	echo json_encode($return);
}

?>