<?php
require "functions.php";

session_start();
if (!isset($_SESSION['id_admin'])) {
	$return = [-2, "An Error occured: Admin not connected, retry to connect..."];

	echo json_encode($return);
} else {
	if (isset($_POST['mode'])) {
		if ($_POST['mode'] == 'update') {
			$update = getElementById($_POST['id'], 'variete_the');
			if (is_null($update)) {
				$return = [0, "An Error occured: Variete The with id ".$_POST['id']." not found..."];
			} else {
				$return = [4, $update];
			}

		} elseif($_POST['mode'] == 'delete') {
			$delete = deleteElementById($_POST['id'], 'variete_the');
			if ($delete == true) {
				$return = [1, "Variete The Deleted as successfully!"];
			} else {
				$return = [0, $delete];
			}

		}
	} else {
		if ($_POST['id'] == -1) {
			$insert = variete_theInsert($_POST['nom'], $_POST['occupation'], $_POST['rendement']);
			if ($insert == true) {
				$return = [1, "Variete The Inserted as successfully!"];
			} else {
				$return = [0, $insert];
			}
		} else {
			$update = variete_theUpdate($_POST['id'], $_POST['nom'], $_POST['occupation'], $_POST['rendement']);
			if ($update == true) {
				$return = [1, "Variete The Updated as successfully!"];
			} else {
				$return = [0, $update];
			}
		}
	}

	echo json_encode($return);
}

?>