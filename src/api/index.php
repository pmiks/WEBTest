<?php
$params=explode('/',($_GET['q']));
$method=$_SERVER['REQUEST_METHOD'];

header('Content-type:json/application; charset=utf-8');
require 'connect.php';
require 'functions.php';

if ($params[0]==="1.0"){

if($method==="GET")
{
      if ($params[1]==="testslist"){
          if (isset($params[2])){
               getTestItem($connect,$params[2]);
           }else{
            getTestsList($connect);
           }
        }
 }


    elseif($method==="POST"){
          if ($params[1]==="testslist"){
                   $data=json_decode(file_get_contents('php://input'),true);
                   setTestItem($connect,$data);

//            setTestItem($connect,$_POST);
          }
        }elseif($method==="PATCH"){
           if ($params[1]==="testslist")
           {
                if (isset($params[2])){
                   $data=json_decode(file_get_contents('php://input'),true);
                   editTestItem($connect,$params[2],$data);
               }
            }
         }elseif($method==="DELETE"){
           if ($params[1]==="testslist"){
                if (isset($params[2])){
                   deleteTestItem($connect,$params[2]);
               }

        }

        }

}
 ?>
