<?php
require "../php/functions.php";

$cueilleur = getAllTableElementJoinOn('cueilleur', 'genre', 'id_genre');
echo json_encode($cueilleur);

?>