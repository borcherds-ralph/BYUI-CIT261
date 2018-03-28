var home = document.getElementById('home');
var travel = document.getElementById('travel');
var login = document.getElementById('login');
var signup = document.getElementById('signup');
var ajax1 = getHTTPObject();

home.addEventListener("click", function() {
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/homepage.html";
    if (ajax1) {

        ajax1.onreadystatechange =
            function() {

                // This next line checks to make sure that the file has finished being read and that it was read correctly.
                if (ajax1.readyState == 4 && ajax1.status == 200) {
                    // document.getElementById('serverState').innerHTML += "Ready State: " + ajax1.readyState + "  Status: " + ajax1.status + " start<BR>";
                    // var data = JSON.parse(ajax1.responseText);
                    document.getElementById('content').innerHTML = ajax1.responseText;

                } else {
                    // document.getElementById('serverState').innerHTML += "Ready State: " + ajax1.readyState + "  Status: " + ajax1.status + "<BR>";
                }
            }
        ajax1.open("GET", url, true);
        ajax1.send();
    }
});


travel.addEventListener("click", function() {
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/travelpage.html";
    if (ajax1) {

        ajax1.onreadystatechange =
            function() {

                // This next line checks to make sure that the file has finished being read and that it was read correctly.
                if (ajax1.readyState == 4 && ajax1.status == 200) {
                    // document.getElementById('serverState').innerHTML += "Ready State: " + ajax1.readyState + "  Status: " + ajax1.status + " start<BR>";
                    // var data = JSON.parse(ajax1.responseText);
                    document.getElementById('content').innerHTML = ajax1.responseText;

                } else {
                    // document.getElementById('serverState').innerHTML += "Ready State: " + ajax1.readyState + "  Status: " + ajax1.status + "<BR>";
                }
            }
        ajax1.open("GET", url, true);
        ajax1.send();
    }
});

login.addEventListener("click", function() {
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/loginpage.html";
    if (ajax1) {

        ajax1.onreadystatechange =
            function() {

                // This next line checks to make sure that the file has finished being read and that it was read correctly.
                if (ajax1.readyState == 4 && ajax1.status == 200) {
                    // document.getElementById('serverState').innerHTML += "Ready State: " + ajax1.readyState + "  Status: " + ajax1.status + " start<BR>";
                    // var data = JSON.parse(ajax1.responseText);
                    document.getElementById('content').innerHTML = ajax1.responseText;

                } else {
                    // document.getElementById('serverState').innerHTML += "Ready State: " + ajax1.readyState + "  Status: " + ajax1.status + "<BR>";
                }
            }
        ajax1.open("GET", url, true);
        ajax1.send();
    }
});
signup.addEventListener("click", function() {
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/signuppage.html";
    if (ajax1) {

        ajax1.onreadystatechange =
            function() {

                // This next line checks to make sure that the file has finished being read and that it was read correctly.
                if (ajax1.readyState == 4 && ajax1.status == 200) {
                    // document.getElementById('serverState').innerHTML += "Ready State: " + ajax1.readyState + "  Status: " + ajax1.status + " start<BR>";
                    // var data = JSON.parse(ajax1.responseText);
                    document.getElementById('content').innerHTML = ajax1.responseText;

                } else {
                    // document.getElementById('serverState').innerHTML += "Ready State: " + ajax1.readyState + "  Status: " + ajax1.status + "<BR>";
                }
            }
        ajax1.open("GET", url, true);
        ajax1.send();
    }
});



function getHTTPObject() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function regUser() {
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/checkdb.php";
    var fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        username = document.getElementById('username').value,
        city = document.getElementById('city').value,
        state = document.getElementById('state').value,
        zip = document.getElementById('zipcode').value;
    var params = 'action=register&fname=' + fname + '&lname=' + lname + '&email=' + email + '&username=' + username + '&city=' + city + '&state=' + state + '&zip=' + zip;
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
}