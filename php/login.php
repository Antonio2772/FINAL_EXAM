<?php
require 'functions.php';

$login = login($_POST['id'], $_POST['password']);
if ($login == -1) {
	$return = [0, 'An error occured: The User already Exists or There is an Exception...'];
} else if (!is_numeric($login)) {
	$return = [0, $login];
} else {
	$return = [2, 'Log In successfully!'];
	session_start();
	$_SESSION['id_utilisateur'] = $login;
}

echo json_encode($return);
?>