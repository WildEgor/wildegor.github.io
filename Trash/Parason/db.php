<?php

	$db = new mysqli("localhost", "root", "", "purejs79");
    
	if($db->connect_error)
        echo $db->connect_error;
 