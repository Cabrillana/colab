<?php


class VisitasController {

  private $db = null;

  function __construct($conexion) {
    $this->db = $conexion;
  }

  public function devolverVisitas() {
    /*Obtenemos los datos de diez en diez de la tabla visitas.*/
    $eval = "SELECT * FROM visitas LIMIT 10";
    $peticion = $this->db->prepare($eval);
    $peticion->execute();
    $resultado = $peticion->fetchAll(PDO::FETCH_OBJ);
    exit(json_encode($resultado));
  }

  public function introducirVisita() {

    $visita = json_decode(file_get_contents("php://input"));
    /*Comprobamos que no este vacio dos de los campos obligatorios.*/

    /*
    if(!isset($visita->municipio) || !isset($visita->email) || !isset($visita->nombre)) {
      http_response_code(400);
      exit(json_encode(["error" => "No se han enviado todos los parametros"]));
    }
*/
  
    if(!isset($visita->procedencia)) $visita->procedencia = null;
    if(!isset($visita->comentario)) $visita->comentario = null;

    /*Si está todo correcto insertamos en visitas los datos.*/
    $eval = "INSERT INTO visitas (nombre,email,municipio,procedencia,comentario) VALUES (?,?,?,?,?)";
    $peticion = $this->db->prepare($eval);
    $resultado = $peticion->execute([$visita->nombre,$visita->email,$visita->visitado,$visita->procedencia,$visita->comentario]);
    http_response_code(201);
    exit(json_encode("Visita creada correctamente"));
  }
  
}