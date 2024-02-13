<?php
require 'functions.php';

$signup = signup($_POST['id'], $_POST['password']);
if ($signup == true) {
	$return = [1, 'Sign Up successfully!'];
} elseif ($signup == false) {
	$return = [0, 'An error occured: The User already Exists or There is an Exception...'];
}

echo json_encode($return);
?>