<?php

include '../BD.php';

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){

    $query="select * from persona";

    $resultado=metodoGet($query);
    
    echo json_encode($resultado->fetchAll(PDO::FETCH_ASSOC));

    header("HTTP/1.1 200 OK");
    exit();
}
// agregar
if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $ci=$_POST['ci'];
    $nombre=$_POST['nombre'];
    $fecha=$_POST['fecha'];
    $departamento=$_POST['departamento'];
    $sql="INSERT INTO PERSONA VALUES('$ci','$nombre','$fecha','$departamento');";
    $respuesta=metodoPost($sql);
    $query="select * from persona";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='PUT'){
    // unset($_POST['METHOD']);
    unset($_POST['METHOD']);
    $ci=$_GET['ci'];
    $nombre=$_POST['nombre'];
    $departamento=$_POST['departamento'];
    $fecnaci=$_POST['fecnaci'];
    $consulta="UPDATE persona SET nombre ='$nombre', departamento ='$departamento', fecnaci='$fecnaci' WHERE ci='$ci'"; 
    metodoPut($consulta);
    $query="select * from persona";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    echo 'dsadas';
    $ci=$_GET['ci'];
    $q="DELETE FROM registro WHERE ci='$ci'";
    metodoDelete($q);
    $query="select * from persona";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");
?>





<!-- if($_SERVER['REQUEST_METHOD']=='PUT'){
    // unset($_POST['METHOD']);
    $ci=$_GET['ci'];
    $nombre=$_GET['nombre'];
    $fecnaci=$_GET['fecnaci'];
    $departamento=$_GET['departamento'];
    $query="UPDATE persona SET nombre ='$nombre',departamento ='$departamento', fecnaci='$fecnaci' WHERE ci='$ci'";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();

} -->