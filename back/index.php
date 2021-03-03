<?php


require_once "config/app.php";
require_once "config/Conexion.php";

define('METODO', $_SERVER["REQUEST_METHOD"]);
define('ROOT',  __DIR__ . DIRECTORY_SEPARATOR);

if(!isset($_GET['url']) || METODO == "OPTIONS"){
  echo "ColabBack";
  exit();
} else {
  $url = $_GET['url'];
}
//🤠 dani el vaquero www.danidaw.tk <3
//Preparamos la conexion con la base de datos
$db = new Conexion();
$conexion = $db->getConnection();

$control = explode('/',$url);
switch($control[0]) {

  case "municipios":
    require_once("controllers/municipios.controller.php");
    $user = new MunicipiosController($conexion);
    switch(METODO){
      case "GET":
        $user->leerMunicipios();
        break;
    }
    break;

  case "visitas":
    require_once("controllers/visitas.controller.php");
    $user = new VisitasController($conexion);
    switch(METODO){
      case "GET":
        $user->devolverVisitas();
        break;
      case "POST":
        $user->introducirVisita();
        break;
    }
    break;

  case "contacto":
    require_once("controllers/contacto.controller.php");
    $user = new ContactoController($conexion);
    switch(METODO){
      case "POST":
        $user->insertarSugerencia();
        break;
    }
    break;

    default:
      echo "ColabBack";
      exit();
}
