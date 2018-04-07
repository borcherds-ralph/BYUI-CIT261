<?php
session_start();

include 'config.php';

// Get the action to perform.
$action = filter_input(INPUT_POST, 'action');
if ($action == NULL){
 $action = filter_input(INPUT_GET, 'action');
}

// Check for an existing email address
function checkExistingEmail($email) {
    $db = dbConnect();
    $sql = 'SELECT userEmail FROM cit261.users WHERE userEmail = :email';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    $matchEmail = $stmt->fetch(PDO::FETCH_NUM);
    $stmt->closeCursor();
    if(empty($matchEmail)){
        return 'FALSE';
    } else {
        return 'TRUE';
    }
}

// Check for an existing email address
function getUser($username) {
    $db = dbConnect();
    $sql = 'SELECT * FROM cit261.users WHERE username = :username';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':username', $username, PDO::PARAM_STR);
    $stmt->execute();
    $matchEmail = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    return $matchEmail;
    
}
// Check for an existing username
function checkExistingUname($uname) {
    $db = dbConnect();
    $sql = 'SELECT username FROM cit261.users WHERE username = :uname';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':uname', $uname, PDO::PARAM_STR);
    $stmt->execute();
    $matchUname = $stmt->fetch(PDO::FETCH_NUM);
    $stmt->closeCursor();
    if(empty($matchUname)){
        return 'FALSE';
    } else {
        return 'TRUE';
    }
}


Function checkEmail($clientEmail){
    $valEmail = filter_var($clientEmail, FILTER_VALIDATE_EMAIL);
    return $valEmail;
}

function regUser($firstname, $lastname, $username, $email, $password, $city, $state, $zip){ 
    $db = dbConnect();
    $sql = 'INSERT INTO cit261.users (userFirstName, userLastName, username, userEmail, userPassword, userCity, userState, userZipCode) 
    VALUES (:userfirstname, :userlastname, :userusername, :useremail, :userpassword, :usercity, :userstate, :userzipcode)';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':userfirstname', $firstname, PDO::PARAM_STR);
    $stmt->bindValue(':userlastname', $lastname, PDO::PARAM_STR);
    $stmt->bindValue(':userusername', $username, PDO::PARAM_STR);
    $stmt->bindValue(':useremail', $email, PDO::PARAM_STR);
    $stmt->bindValue(':userpassword', $password, PDO::PARAM_STR);
    $stmt->bindValue(':usercity', $city, PDO::PARAM_STR);
    $stmt->bindValue(':userstate', $state, PDO::PARAM_STR);
    $stmt->bindValue(':userzipcode', $zip, PDO::PARAM_STR);
    // Insert the data
    $stmt->execute();
    // Ask how many rows changed as a result of our insert
    $rowsChanged = $stmt->rowCount();
    // Close the database interaction
    $stmt->closeCursor();
    // Return the indication of success (rows changed)
    return $rowsChanged;
}

function loginUserValidate($username, $password) {
    $db = dbConnect();
    $sql = 'SELECT username, userPassword from cit261.users WHERE username = :userusername AND userPassword = :userpassword';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':userusername', $username, PDO::PARAM_STR);
    $stmt->bindValue(':userpassword', $password, PDO::PARAM_STR);
    $stmt->execute();
    $rows = $stmt->rowCount();
    $stmt->closeCursor();
    return $rows;
}

switch ($action) {

    case 'checkEmail':
        $mail = filter_input(INPUT_GET, 'email');
        $mailresult = checkeMail($mail);
        if ($mailresult == true) {
            $result = checkExistingEmail($mail);
            echo $result;
    } else {
        echo "INVALID";
        
    }
    break;

    case 'register':
        $firstname = filter_input(INPUT_POST, 'fname');
        $lastname = filter_input(INPUT_POST, 'lname');
        $username = filter_input(INPUT_POST, 'uname');
        $email = filter_input(INPUT_POST, 'email');
        $password = filter_input(INPUT_POST, 'pword');
        $city =  filter_input(INPUT_POST, 'city');
        $state =  filter_input(INPUT_POST, 'state');
        $zip =  filter_input(INPUT_POST, 'zipcode');

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $result = regUser($firstname, $lastname, $username, $email, $hashedPassword, $city, $state, $zip);
        if($result == 1){
            echo 'TRUE';
        } else {
            echo 'FALSE';
        }
    break;

    case 'validateUsername':
        $uname = filter_input(INPUT_GET, 'uname');
        $unameresult = checkExistingUname($uname);
        echo $unameresult;
    break;

    case 'loginUser':
        $username = filter_input(INPUT_POST, 'uname');
        $password = filter_input(INPUT_POST, 'pword');

        $userData = getUser($username);
        $result = password_verify($password, $userData['userPassword']);
        
        if($result){
            echo 'TRUE';
        } else {
            echo 'FALSE';
        }
    break;
}