<?php
    include 'db.php';

    $username = $_GET["username"];
    $password = $_GET["password"];
    $enc_pass = md5($password);
    
    $exist = $db->query("SELECT * from users where username = '$username' and password = '$enc_pass'");

    $data = $exist->fetch_all(MYSQLI_ASSOC);

    if($exist->num_rows > 0) {
        $result = array("success" => true, "user_id" => $data[0]['id'], "user_name" => $data[0]['username']);
    }
    else {
        $result = array("success" => false, "error" => "USER not found or Incorrect password");
    }

    echo json_encode($result, JSON_UNESCAPED_UNICODE);