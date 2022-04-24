<?php

include './BD.php';

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['usuario']) && isset($_GET['contrasena'])){
        $usuario=$_GET['usuario'];
        $contrasena=$_GET['contrasena'];
        $query="select * from persona p, registro r where r.usuario = '$usuario' and r.password = $contrasena and r.ci = p.ci";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll());
    }
    exit();
}

?>



<!-- SELECT p.departamento,AVG(i.notafinal)
FROM persona p, inscripcion i
WHERE p.ci = i.ci
GROUP BY p.departamento -->