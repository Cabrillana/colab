<?php


class ContactoController {

  private $db = null;

  function __construct($conexion) {
    $this->db = $conexion;
  }

  public function insertarSugerencia() {

    $sugerencia = json_decode(file_get_contents("php://input"));

    if(!isset($sugerencia->nombre) || !isset($sugerencia->email)) {
      http_response_code(400);
      exit(json_encode(["error" => "No se han enviado todos los parametros"]));
    }
    $eval = "INSERT INTO contacto (nombre,email,comentario,municipio) VALUES (?,?,?,?)";
    $peticion = $this->db->prepare($eval);
    $resultado = $peticion->execute([$sugerencia->nombre,$sugerencia->email,$sugerencia->comentario,$sugerencia->municipio]);
    http_response_code(201);
    exit(json_encode("Sugerencia creada correctamente"));
  }
  
}