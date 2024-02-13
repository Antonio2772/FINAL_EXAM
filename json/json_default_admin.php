<?php
require '../php/functions.php';

$admin = getElementById(1, 'admin');
if (is_null($admin)) {
	$return = [0, "An Error occured: Default Admin not found..."];
} else {
	$return = [1, $admin];
}
echo json_encode($return);

?>