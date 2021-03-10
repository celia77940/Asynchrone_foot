<?php

require_once('assets/inc/bdd.php');

$sql = 'SELECT * FROM joueurs';
$query = $db->prepare($sql);
$query->execute();
$result = $query->fetchAll(PDO::FETCH_ASSOC);

var_dump($result);