<?php
require 'functions.php';

$admin_login = admin_login($_POST['nom'], $_POST['password']);
if ($admin_login == -1) {
	$return = [0, 'An Error occured: Name or Password Invalid...'];
} else {
	$return = [3, 'Admin Log In successfully!'];
	session_start();
	$_SESSION['id_admin'] = $admin_login;
}

echo json_encode($return);

?>