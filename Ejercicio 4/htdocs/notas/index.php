<?php

include '../BD.php';

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['ci'])){
        $ci=$_GET['ci'];
        $query="select i.* from persona p, inscripcion i where p.ci = '$ci' and i.ci = '$ci'";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll());
    }
    exit();
}

?>