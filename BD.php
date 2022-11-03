<?php

$name = $_POST['name'];
$email = $_POST['email'];



$db=new PDO('mysql:host=localhost;')
$mysql = $db -> prepare("INSERT INTO `order`(`time`,name,email)
VALUES(NOW(), :name, :email)");
$mysql->bindParam(':name', $name);
$mysql->bindParam(':email', $email);
$mysql->execute();
echo '1';






?>