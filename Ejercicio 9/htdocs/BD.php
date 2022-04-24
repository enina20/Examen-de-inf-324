<?php
$pdo=null;
$host="localhost";
$user="root";
$password="";
$bd="mibasewilderrony";

function conectar(){
    try{
        $GLOBALS['pdo']=new PDO("mysql:host=".$GLOBALS['host'].";dbname=".$GLOBALS['bd']."", $GLOBALS['user'], $GLOBALS['password']);
        $GLOBALS['pdo']->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch (PDOException $e){
        //print "Error!: No se pudo conectar a la bd ".$bd."<br/>";
        print "\nError!: ".$e."<br/>";
        die();
    }
}

function desconectar() {
    $GLOBALS['pdo']=null;
}

function metodoGet($query){
    try{
        conectar();
        $sentencia=$GLOBALS['pdo']->prepare($query);
        $sentencia->setFetchMode(PDO::FETCH_ASSOC);
        $sentencia->execute();
        desconectar();
        return $sentencia;
    }catch(Exception $e){
        die("Error: ".$e);
    }
}

function metodoPost($sql){
    try{
        conectar();
        //$con = new mysqli("localhost","react","wilderwr7","copa tigo");
        //$result = mysqli_sql($con, $sql);
         $sentencia=$GLOBALS['pdo']->prepare($sql);
        $sentencia->execute();
        //$idAutoIncrement=metodoGet($queryAutoIncrement)->fetch(PDO::FETCH_ASSOC);
        $respuesta=array_merge($_POST);
         $sentencia->closeCursor();
        desconectar();
        return $respuesta;
    }catch(Exception $e){
        die("Error");
    }
}


function metodoPut($consulta){
    try{
        conectar();
        $sentencia=$GLOBALS['pdo']->prepare($consulta);
        $sentencia->execute();
        $resultado=array_merge($_GET, $_POST);
        $sentencia->closeCursor();
        desconectar();
        return $resultado;
    }catch(Exception $e){
        die("Error".$e);
    }
}

function metodoDelete($q){
    try{
        conectar();
        $sentencia=$GLOBALS['pdo']->prepare($q);
        $sentencia->execute();
        $sentencia->closeCursor();
        desconectar();
        return $_GET['ci'];
    }catch(Exception $e){
        die("Error: ".$e);
    }
}
?>