<?php


class VisitasController {

  private $db = null;

  function __construct($conexion) {
    $this->db = $conexion;
  }

  public function devolverVisitas() {
    /*Obtenemos los datos de diez en diez de la tabla visitas.*/
    $eval = "SELECT * FROM visitas LIMIT 10 ORDER BY id DESC";
    $peticion = $this->db->prepare($eval);
    $peticion->execute();
    $resultado = $peticion->fetchAll(PDO::FETCH_OBJ);
    exit(json_encode($resultado));
  }

  public function introducirVisita() {

    $visita = json_decode(file_get_contents("php://input"));
    /*Comprobamos que no este vacio dos de los campos obligatorios.*/

    /*
    if(!isset($visita->municipio) || !isset($visita->email)) {
      http_response_code(400);
      exit(json_encode(["error" => "No se han enviado todos los parametros"]));
    }

    */

    if(!isset($visita->procedencia)) $visita->procedencia = null;
    if(!isset($visita->comentario)) $visita->comentario = null;
    if(!isset($visita->id_contacto)) $visita->id_contacto = null;

    /*Si está todo correcto insertamos en visitas los datos.*/
    $eval = "INSERT INTO visitas (nombre,email,municipio,procedencia,comentario,id_contacto) VALUES (?,?,?,?,?,?)";
    $peticion = $this->db->prepare($eval);
    $resultado = $peticion->execute([$visita->nombre,$visita->email,$visita->municipio,$visita->procedencia,$visita->comentario,$visita->id_contacto]);
    http_response_code(201);
    exit(json_encode("Visita creada correctamente"));
  }
  
}