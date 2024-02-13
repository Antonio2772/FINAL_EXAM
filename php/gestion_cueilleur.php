<?php
require 'functions.php';

session_start();
if (!isset($_SESSION['id_admin'])) {
	$return = [-2, "An Error occured: Admin not connected, retry to connect..."];

	echo json_encode($return);
} else {
	if (isset($_POST['mode'])) {
		if ($_POST['mode'] == 'update') {
			$update = getElementById($_POST['id'], 'cueilleur');
			if (is_null($update)) {
				$return = [0, "An Error occured: Cueilleur with id ".$_POST['id']." not found..."];
			} else {
				$return = [6, $update];
			}

		} elseif($_POST['mode'] == 'delete') {
			$delete = deleteElementById($_POST['id'], 'cueilleur');
			if ($delete == true) {
				$return = [1, "Cueilleur Deleted as successfully!"];
			} else {
				$return = [0, $delete];
			}

		}
	} else {
		if ($_POST['id'] == -1) {
			$insert = cueilleurInsert($_POST['nom'], $_POST['genre'], $_POST['date_naissance']);
			if ($insert == true) {
				$return = [1, "Cueilleur Inserted as successfully!"];
			} else {
				$return = [0, $insert];
			}
		} else {
			$update = cueilleurUpdate($_POST['id'], $_POST['nom'], $_POST['genre'], $_POST['date_naissance']);
			if ($update == true) {
				$return = [1, "Cueilleur Updated as successfully!"];
			} else {
				$return = [0, $update];
			}
		}
	}

	echo json_encode($return);
}

?>