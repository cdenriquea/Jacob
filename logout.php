<?php
	session_start();
	if(session_destroy()) {
		unset($_SESSION['user_session2']);
		unset($_SESSION['user_name']);
		unset($_SESSION['user_lastName']);
      	header("Location: index.html");
   }	
?>
