<?php
    include 'db.php';

    $employ = $_POST["employ"];
    $feedback = $_POST["feedback"];
    $rating = $_POST["rating"];
    $user_id = $_POST["user_id"];

    $res = $db->query("SELECT user_id FROM feedbacks WHERE user_id = '$user_id'");

        if ($res->num_rows == 0) {
             $result = $db->query("INSERT INTO feedbacks (employ, feedback, rating, user_id) VALUES('$employ', '$feedback', '$rating', '$user_id')");
             $result = array("success" => true);
        } else {
            $result = array("success" => false);
        }

    echo json_encode($result, JSON_UNESCAPED_UNICODE);