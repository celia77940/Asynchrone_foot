<?php

require_once('assets/inc/bdd.php');

    $text = htmlspecialchars($_POST['text']);

    $sql = "SELECT * FROM joueurs WHERE nom_prenom LIKE '%".$text."%' ORDER BY id DESC";
    $query = $db->prepare($sql);
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);




// Retourne les valeurs en JSON
echo(json_encode($result));
