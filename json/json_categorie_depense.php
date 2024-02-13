<?php
require '../php/functions.php';

$categorie_depense = getAllTableElement('categorie_depense');
echo json_encode($categorie_depense);

?>