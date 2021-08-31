<?php
    include '../config/db.php';

    $employ = $_POST["employ"];
    $feedback = $_POST["feedback"];
    $rating = $_POST["rating"];
    $user_id = $_POST["user_id"];

    $db->query("INSERT INTO feedbacks (employ, feedback, rating, user_id) VALUES('$employ', '$feedback', '$rating', '$user_id')");
    $result = array("success" => true);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);