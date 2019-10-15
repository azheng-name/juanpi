<?php
header('content-type:text/html;charset=utf-8');
define('HOST','localhost');
define('USERNAME','root');
define('PASSWORD','');
define('DBNAME','juanpi');


 $shanc=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);//链接数据库的对象
  if($shanc->connect_error){
      die('数据库连接失败'.$shanc->connect_error);//输出错误信息
  };

  $shanc->query('SET NAMES UTF8');

  $resl=$shanc->query("select * from pic");

  $arrda=array();

  for($i=0;$i<$resl->num_rows;$i++){
      $arrda[$i]=$resl->fetch_assoc();
  };
//  print_r($resl->fetch_assoc());
 echo json_encode($arrda);