<?php
require 'functions.php';

session_start();
if (!isset($_SESSION['id_admin'])) {
	$return = [-2, "An Error occured: Admin not connected, retry to connect..."];

	echo json_encode($return);
} else {
	if (isset($_POST['mode'])) {
		if ($_POST['mode'] == 'update') {
			$update = getElementById($_POST['id'], 'categorie_depense');
			if (is_null($update)) {
				$return = [0, "An Error occured: Depense Category with id ".$_POST['id']." not found..."];
			} else {
				$return = [7, $update];
			}

		} elseif($_POST['mode'] == 'delete') {
			$delete = deleteElementById($_POST['id'], 'categorie_depense');
			if ($delete == true) {
				$return = [1, "Depense Category Deleted as successfully!"];
			} else {
				$return = [0, $delete];
			}

		}
	} else {
		if ($_POST['id'] == -1) {
			$insert = categorie_depenseInsert($_POST['nom']);
			if ($insert == true) {
				$return = [1, "Depense Category Inserted as successfully!"];
			} else {
				$return = [0, $insert];
			}
		} else {
			$update = categorie_depenseUpdate($_POST['id'], $_POST['nom']);
			if ($update == true) {
				$return = [1, "Depense Category Updated as successfully!"];
			} else {
				$return = [0, $update];
			}
		}
	}

	echo json_encode($return);
}

?>