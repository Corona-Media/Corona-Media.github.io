<?php
$myfile = fopen("feedback.txt", "a") or die("Unable to open file!");
$txt = $_POST["message"] . "\n";
fwrite($myfile, $txt);
fclose($myfile);
header("Location: https://corona-media.github.io/feedback.html");
?>