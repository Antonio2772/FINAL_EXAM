<?php
require '../php/functions.php';

$salaire = getAllTableElementJoinOn('salaire', 'cueilleur', 'id_cueilleur');
echo json_encode($salaire);

?>