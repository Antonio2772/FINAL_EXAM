<?php
require '../php/functions.php';

session_start();
if (!isset($_SESSION['id_admin'])) {
	$return = [-2, "An Error occured: Admin not connected, retry to connect..."];

	echo json_encode($return);
} else {
	$admin = getElementById($_SESSION['id_admin'], 'admin');
	if (is_null($admin)) {
		$return = [0, "An Error occured: Admin with id ".$_SESSION['id_admin']." not found..."];
	} else {
		$return = [1, $admin];
	}

	echo json_encode($return);
}

?>