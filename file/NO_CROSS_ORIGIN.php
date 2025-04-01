<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Max-Age: 86400");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: http://localhost:5500");
    header("Content-Type: text/html; charset=utf-8");
    echo file_get_contents("https://www.taptap.cn/app/165287/all-info");
?>
