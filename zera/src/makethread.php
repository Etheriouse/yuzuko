<?php

$thread_name = $_POST['name'];
$thread_content = $_POST['content'];


if(isset($thread_name) && isset($thread_content)) {
    $mf = fopen("thread/".$thread_name.".php", "w");
    fwrite($mf, $thread_content);
    fclose($mf);
}

?>