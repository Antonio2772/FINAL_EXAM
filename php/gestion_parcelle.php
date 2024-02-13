<?php
require 'functions.php';

session_start();
if (!isset($_SESSION['id_admin'])) {
	$return = [-2, "An Error occured: Admin not connected, retry to connect..."];

	echo json_encode($return);
} else {
	if (isset($_POST['mode'])) {
		if ($_POST['mode'] == 'update') {
			$update = getElementById($_POST['id'], 'parcelle');
			if (is_null($update)) {
				$return = [0, "An Error occured: Parcelle with id ".$_POST['id']." not found..."];
			} else {
				$return = [5, $update];
			}

		} elseif($_POST['mode'] == 'delete') {
			$delete = deleteElementById($_POST['id'], 'parcelle');
			if ($delete == true) {
				$return = [1, "Parcelle Deleted as successfully!"];
			} else {
				$return = [0, $delete];
			}

		}
	} else {
		if ($_POST['id'] == -1) {
			$insert = parcelleInsert($_POST['numero'], $_POST['surface'], $_POST['id_variete_the']);
			if ($insert == true) {
				$return = [1, "Parcelle Inserted as successfully!"];
			} else {
				$return = [0, $insert];
			}
		} else {
			$update = parcelleUpdate($_POST['id'], $_POST['numero'], $_POST['surface'], $_POST['id_variete_the']);
			if ($update == true) {
				$return = [1, "Parcelle Updated as successfully!"];
			} else {
				$return = [0, $update];
			}
		}
	}

	echo json_encode($return);
}

?>