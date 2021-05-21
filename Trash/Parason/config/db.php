<?php

	$db = new mysqli("localhost", "root", "", "purejs");

	if($db->connect_error)
        echo $db->connect_error;