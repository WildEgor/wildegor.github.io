<?php
    include '../config/db.php';

    $feedbackData = $db->query('SELECT f.employ, f.feedback, f.rating, u.username
                                FROM feedbacks f LEFT JOIN users u
                                ON f.user_id = u.id');

    

    $data = $feedbackData->fetch_all(MYSQLI_ASSOC);

    echo json_encode($data, JSON_UNESCAPED_UNICODE);
