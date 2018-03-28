<?php

include 'config.php';

// Get the action to perform.
$action = filter_input(INPUT_POST, 'action');
if ($action == NULL){
 $action = filter_input(INPUT_GET, 'action');
}

// Check for an existing email address
function checkExistingEmail($email) {
    $db = dbConnect();
    $sql = 'SELECT userEmail FROM users WHERE userEmail = :email';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    $matchEmail = $stmt->fetch(PDO::FETCH_NUM);
    $stmt->closeCursor();
    if(empty($matchEmail)){
        return "{'Success': 'FALSE'}";
    } else {
        return "{'Success': 'TRUE'}";
    }
}

Function checkEmail($clientEmail){
    $valEmail = filter_var($clientEmail, FILTER_VALIDATE_EMAIL);
    return $valEmail;
}

function regUser($firstname, $lastname, $username, $email, $password, $city, $state, $zip){
     
    $db = dbConnect();

    $sql = 'INSERT INTO users (userFirstName, userLastName, username, userEmail, userPassword, userCity, userState, userZipCode) 
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
switch ($action) {

    case 'checkEmail':
        $mail = filter_input(INPUT_GET, 'email');
        $mailresult = checkeMail($mail);
        if ($mailresult == true) {
            $result = checkExistingEmail($mail);
            //echo json_encode($result);
            return json_encode($result);
    } else {
        //echo json_encode("{ 'SUCCESS': 'invalid'}");
        return json_encode("{ 'SUCCESS': 'invalid'}");
    }
    break;

    case 'register':
        $firstname = filter_input(INPUT_POST, 'fname');
        $lastname = filter_input(INPUT_POST, 'lname');
        $username = filter_input(INPUT_POST, 'username');
        $email = filter_input(INPUT_POST, 'email');
        $password = filter_input(INPUT_POST, 'pword');
        $city =  filter_input(INPUT_POST, 'city');
        $state =  filter_input(INPUT_POST, 'state');
        $zip =  filter_input(INPUT_POST, 'zip');
        $result = regUser($firstname, $lastname, $username, $email, $password);
        if($result == 1){
            echo json_encode("{ 'SUCCESS': 'true'}");
            return json_encode("{ 'SUCCESS': 'true'}");
        } else {
            echo json_encode("{ 'SUCCESS': 'false'}");
            return json_encode("{ 'SUCCESS': 'false'}");
        }
    break;
}