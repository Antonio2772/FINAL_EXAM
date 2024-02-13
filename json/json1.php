<?php
require '../php/functions.php';

$utilisateur = getElementById(1, 'utilisateur');
if (is_null($utilisateur)) {
	$return = [0, "An Error occured: Default User not found..."];
} else {
	$return = [1, $utilisateur];
}
echo json_encode($return);

?>