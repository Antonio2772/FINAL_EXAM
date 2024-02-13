<?php
require '../php/functions.php';

$genre = getAllTableElement('genre');
echo json_encode($genre);

?>