<?php

require_once('assets/inc/bdd.php');

// if($_POST){
    $sql = 'SELECT * FROM joueurs';
    $query = $db->prepare($sql);
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
// };

// Retourne les valeurs en JSON
echo(json_encode($result));
