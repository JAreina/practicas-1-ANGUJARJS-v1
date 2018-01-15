<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

///$sql = "SELECT nombre,apellido,fechaNacimiento,titulo
//FROM autor,libro where autor.id = libro.autor ORDER BY nombre ASC";


$sql = "SELECT nombre,apellido,fechaNacimiento
FROM autor ORDER BY nombre ASC";


echo Database::get_json_rows($sql);

?>
