<?php

require_once('assets/inc/bdd.php');

$sql = 'SELECT * FROM joueurs WHERE nom_prenom LIKE ?';
$query = $db->prepare($sql);
$titre = "%".$_POST["text"]."%";
$query->execute(array($titre));
$result = $query->fetchAll(PDO::FETCH_ASSOC);

// Retourne les valeurs en JSON
echo(json_encode($result));