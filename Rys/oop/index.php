<?php
    include 'user.php';
    $test = new user();
    $hello=$test->getItemById(15);
    echo "<pre>"; var_dump($hello); echo "</pre>"; exit;
?>