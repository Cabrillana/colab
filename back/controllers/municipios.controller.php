<?php


class MunicipiosController {

  private $db = null;

  function __construct($conexion) {
    $this->db = $conexion;
  }

  public function leerMunicipios() {
    $eval = "SELECT * FROM municipios";
    $peticion = $this->db->prepare($eval);
    $peticion->execute();
    $resultado = $peticion->fetchAll(PDO::FETCH_OBJ);
    exit(json_encode($resultado));
  }
  
}