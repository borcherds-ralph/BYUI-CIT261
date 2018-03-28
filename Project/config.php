<?php 

function dbConnect(){
    if ($_SERVER['HTTP_HOST'] == 'localhost')  {
        $basepath = '/cit261/Project';
    } else {
       $basepath = '/';
    }
    
    $server = 'localhost';
    $dbname= 'cit261';
    $username = 'cit261';
    $password = 'mM7kEyL@mS2c';
    $dsn = "mysql:host=$server;dbname=$dbname";
    $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
   
    // Create the actual connection object and assign it to a variable
    try {
        $link = new PDO($dsn, $username, $password, $options);
    return $link;
    } catch(PDOException $e) {
        header("Location: $basepath/view/500.php");
        exit;
    }
}