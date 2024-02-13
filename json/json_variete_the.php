<?php
require "../php/functions.php";

$variete = getAllTableElement('variete_the');
echo json_encode($variete);

?>