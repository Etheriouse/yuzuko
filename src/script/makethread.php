<?php

$data = json_decode(file_get_contents("php://input"), true);

echo "Hello, " . $data["name"] . "!";
echo PHP_EOL;
echo "Your email address is " . $data["tpe"];


?>