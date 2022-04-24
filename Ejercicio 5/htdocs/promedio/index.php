<?php

include './BD.php';

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
        $query="SELECT p.departamento,AVG(i.notafinal) as promedio FROM persona p, inscripcion i WHERE p.ci = i.ci GROUP BY p.departamento";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll());
    exit();
}

?>

