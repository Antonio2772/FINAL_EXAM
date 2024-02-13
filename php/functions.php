<?php
require 'connection.php';

/// Generalisation
// SELECT * FROM $tableName GENERALISATION
function getAllTableElement($tableName) {
	$return = array();
	$sql = 'SELECT * FROM '.$tableName;
	$result = mysqli_query(dbconnection(), $sql);
	while ($data = mysqli_fetch_assoc($result)) {
	    $return[] = $data;
	}
	mysqli_free_result($result);
	return $return;
}


function getAllTableElementJoinOn($tableName1, $tableName2, $idJoin) {
	$retour = array();
	$sql = 'SELECT '.$tableName1.'.*, '.$tableName2.'.* FROM '.$tableName1.' JOIN '.$tableName2.' ON '.$tableName1.'.'.$idJoin.' = '.$tableName2.'.'.$idJoin;
	$resultat = mysqli_query(dbconnection(), $sql);
	while ($donnees = mysqli_fetch_assoc($resultat)) {
	    $retour[] = $donnees;
	}
	mysqli_free_result($resultat);
	return $retour;
}

// SELECT * FROM $tableName WHERE id = $id GENERALISATION
function getElementById($id, $tableName) {
	$sql = 'SELECT * FROM '.$tableName.' WHERE id_'.$tableName.' = '.$id;
	$result = mysqli_query(dbconnection(), $sql);
	$n = mysqli_num_rows($result);
	if ($n == 1) {
		$data = mysqli_fetch_assoc($result);
		mysqli_free_result($result);
		return $data;
	} else {
		return NULL;
	}
}

// DELETE FROM $tableName WHERE id = $id GENERALISATION
function deleteElementById($id, $tableName) {
	$sql = 'DELETE FROM '.$tableName.' WHERE id_'.$tableName.' = '.$id;
		mysqli_query(dbconnection(), $sql);
		return true;
}

/// Admin
function admin_login($nom_admin, $mdp_admin) {
	$sql = 'SELECT * FROM admin WHERE nom_admin = \''.$nom_admin.'\' AND mdp_admin = \''.$mdp_admin.'\'';
	$result = mysqli_query(dbconnection(), $sql);
	$n = mysqli_num_rows($result);
	if ($n == 1) {
		$data = mysqli_fetch_assoc($result);
		mysqli_free_result($result);
		return $data['id_admin'];
	} else {
		return -1;
	}
}

/// Utilisateur
function login($id_utilisateur, $mdp_utilisateur) {
	$sql = 'SELECT * FROM utilisateur WHERE id_utilisateur = '.$id_utilisateur.' AND mdp_utilisateur = \''.$mdp_utilisateur.'\'';
		$result = mysqli_query(dbconnection(), $sql);
		$n = mysqli_num_rows($result);
		if ($n == 1) {
			$data = mysqli_fetch_assoc($result);
			mysqli_free_result($result);
			return $data['id_utilisateur'];
		} else {
			return -1;
		}
}

function signup($id_utilisateur, $mdp_utilisateur) {
	$test = login($id_utilisateur, $mdp_utilisateur);
		if ($test == -1) {
			$sql = 'INSERT INTO utilisateur VALUES ('.$id_utilisateur.', \''.$mdp_utilisateur.'\')';
			mysqli_query(dbconnection(), $sql);
			return true;
		} else {
			return false;
		}
}

function utilisateurUpdate($id_utilisateur, $mdp_utilisateur) {
	$sql = 'UPDATE utilisateur SET mdp_utilisateur = \''.$mdp_utilisateur.'\' WHERE id_utilisateur = '.$id_utilisateur;
		mysqli_query(dbconnection(), $sql);
		return true;
}

//// CRUD
/// CRUD variete_the
function variete_theInsert($nom_variete_the, $occupation, $rendement_pied) {
	$n = count(getAllTableElement('variete_the')); 
		$sql = 'INSERT INTO variete_the VALUES ('.($n + 1).', \''.$nom_variete_the.'\', '.$occupation.', '.$rendement_pied.')';
		mysqli_query(dbconnection(), $sql);
		return true;
}

function variete_theUpdate($id_variete_the, $nom_variete_the, $occupation, $rendement_pied) {
	$sql = 'UPDATE variete_the SET nom_variete_the = \''.$nom_variete_the.'\', occupation = '.$occupation.', rendement_pied = '.$rendement_pied.' WHERE id_variete_the = '.$id_variete_the;
		mysqli_query(dbconnection(), $sql);
		return true;
}

/// CRUD parcelle
function parcelleInsert($numero_parcelle, $surface, $id_variete_the) {
	$n = count(getAllTableElement('parcelle'));
		$sql = 'INSERT INTO parcelle VALUES ('.($n + 1).', '.$numero_parcelle.', '.$surface.', '.$id_variete_the.')';
		mysqli_query(dbconnection(), $sql);
		return true;
}

function parcelleUpdate($id_parcelle, $numero_parcelle, $surface, $id_variete_the) {
	$sql = 'UPDATE parcelle SET numero_parcelle = '.$numero_parcelle.', surface = '.$surface.', id_variete_the = '.$id_variete_the.' WHERE id_parcelle = '.$id_parcelle;
		mysqli_query(dbconnection(), $sql);
		return true;
}

/// CRUD cueilleur
function cueilleurInsert($nom_cueilleur, $genre_cueilleur, $date_naissance_cueilleur) {
	$n = count(getAllTableElement('cueilleur'));
		$sql = 'INSERT INTO cueilleur VALUES ('.($n + 1).', \''.$nom_cueilleur.'\', '.$genre_cueilleur.', \''.$date_naissance_cueilleur.'\')';
		mysqli_query(dbconnection(), $sql);
		return true;
}

function cueilleurUpdate($id_cueilleur, $nom_cueilleur, $genre_cueilleur, $date_naissance_cueilleur) {
	$sql = 'UPDATE cueilleur SET nom_cueilleur = \''.$nom_cueilleur.'\', id_genre = '.$genre_cueilleur.', date_naissance_cueilleur = \''.$date_naissance_cueilleur.'\' WHERE id_cueilleur = '.$id_cueilleur;
		mysqli_query(dbconnection(), $sql);
		return true;
}

/// CRUD categorie_depense1
function categorie_depenseInsert($nom_depense) {
	$n = count(getAllTableElement('categorie_depense'));
		$sql = 'INSERT INTO categorie_depense VALUES ('.($n + 1).', \''.$nom_depense.'\')';
		mysqli_query(dbconnection(), $sql);
		return true;
}

function categorie_depenseUpdate($id_categorie_depense, $nom_depense) {
	$sql = 'UPDATE categorie_depense SET nom_depense = \''.$nom_depense.'\' WHERE id_categorie_depense = '.$id_categorie_depense;
		mysqli_query(dbconnection(), $sql);
		return true;
}

/// CRUD cueillette
function cueilletteInsert($date_cueillette, $id_cueilleur, $id_parcelle, $poid_cueilli) {
	$n = count(getAllTableElement('cueillette'));
		$sql = 'INSERT INTO cueillette VALUES ('.($n + 1).', \''.$date_cueillette.'\', '.$id_cueilleur.', '.$id_parcelle.', '.$poid_cueilli.')';
		mysqli_query(dbconnection(), $sql);
		return true;
}

function cueilletteUpdate($id_cueillette, $date_cueillette, $id_cueilleur, $id_parcelle, $poid_cueilli) {
	$sql = 'UPDATE cueillette SET date_cueillette = \''.$date_cueillette.'\', id_cueilleur = '.$id_cueilleur.', id_parcelle = '.$id_parcelle.', poid_cueilli = '.$poid_cueilli.' WHERE id_cueillette = '.$id_cueillette;
		mysqli_query(dbconnection(), $sql);
		return true;
}

/// CRUD depense
function depenseInsert($date_depense, $id_categorie_depense, $montant_depense, $poid_cueilli) {
	$n = count(getAllTableElement('depense'));
		$sql = 'INSERT INTO depense VALUES ('.($n + 1).', \''.$date_depense.'\', '.$id_categorie_depense.', '.$montant_depense.', '.$poid_cueilli.')';
		mysqli_query(dbconnection(), $sql);
		return true;
}

function depenseUpdate($date_depense, $id_categorie_depense, $montant_depense, $poid_cueilli) {
	$sql = 'UPDATE depense SET date_depense = \''.$date_depense.'\', id_categorie_depense = '.$id_categorie_depense.', montant_depense = '.$montant_depense.', poid_cueilli = '.$poid_cueilli.'';
		mysqli_query(dbconnection(), $sql);
		return true;
}

/// CRUD salaire
function salaireInsert($id_cueilleur, $montant, $date_salaire) {
	$n = count(getAllTableElement('salaire'));
		$sql = 'INSERT INTO salaire VALUES ('.($n + 1).', \''.$id_cueilleur.'\', '.$montant.', \''.$date_salaire.'\')';
		mysqli_query(dbconnection(), $sql);
		return true;
}

function salaireUpdate($id_salaire, $id_cueilleur, $montant, $date_salaire) {
	$sql = 'UPDATE salaire SET id_cueilleur = '.$id_cueilleur.', montant = '.$montant.', date_salaire = \''.$date_salaire.'\' WHERE id_salaire = '.$id_salaire;
		mysqli_query(dbconnection(), $sql);
		return true;
}

?>