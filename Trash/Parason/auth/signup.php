<?php
    include '../config/db.php';

    $username = $_POST["username"];
    $password = $_POST["password"];
    
    $exist = $db->query("SELECT username from users where username = '$username'");
    $result;

    if($exist->num_rows > 0) {
        $result = array("success" => false, "error" => "USER_EXIST");
    }
    else {
        $enc_pass = md5($password);
        $db->query("INSERT INTO users (username, password) VALUES('$username', '$enc_pass')");
        $result = array("success" => true);
    }
    echo json_encode($result, JSON_UNESCAPED_UNICODE);