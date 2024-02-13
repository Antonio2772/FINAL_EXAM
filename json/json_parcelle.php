<?php
require "../php/functions.php";

$parcelle = getAllTableElementJoinOn('parcelle', 'variete_the', 'id_variete_the');
echo json_encode($parcelle);

?>