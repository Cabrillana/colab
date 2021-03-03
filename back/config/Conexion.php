<?php

class Conexion
{
  private $host = "localhost";
  private $database = "colab";
  private $user = "root";
  private $password = "";
  public $pdo;
  //Pablo probando
  public function getConnection() {
    $this->pdo = null;
    try{
      $this->pdo = new \PDO('mysql:host='.$this->host.';dbname='.$this->database,$this->user,$this->password);
    } catch(\PDOException $exception) {
      echo "Conexión Fallida: " . $exception->getMessage();
    }
    return $this->pdo;
  }
}