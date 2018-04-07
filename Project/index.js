var home = document.getElementById('home');
var travel = document.getElementById('travel');
var login = document.getElementById('login');
var signup = document.getElementById('signup');


var ajax1 = getHTTPObject(),
    ajax2 = getHTTPObject();

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

                    $("content").fadeOut(1000);
                    document.body.style.backgroundColor = "#60d7a9";
                    document.getElementById('content').innerHTML = ajax1.responseText;
                    $("content").fadeIn(2000);


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
    var apikey = 'd704f31a50bce41f'
    var divId = '';
    var isJSON = true;

    if (ajax1) {
        ajax1.onreadystatechange =
            function() {
                // This next line checks to make sure that the file has finished being read and that it was read correctly.
                if (ajax1.readyState == 4 && ajax1.status == 200) {
                    // document.getElementById('serverState').innerHTML += "Ready State: " + ajax1.readyState + "  Status: " + ajax1.status + " start<BR>";
                    // var data = JSON.parse(ajax1.responseText);
                    $("content").fadeOut(3000);
                    document.getElementById('content').innerHTML = ajax1.responseText;
                    $("content").fadeIn(5000);
                    document.body.style.backgroundColor = "#7bb7fa";
                    var city = document.getElementById('city').value;
                    var state = document.getElementById('state').value;
                    var wuurl = "//api.wunderground.com/api/" + apikey + "/conditions/q/" + state + "/" + encodeURIComponent(city.trim()) + ".json";
                    var wuurl2 = "//api.wunderground.com/api/" + apikey + "/forecast10day/q/" + state + "/" + encodeURIComponent(city.trim()) + ".json";
                    readWeatherFile(wuurl, divId, isJSON);
                    readWeatherFile(wuurl2, divId, isJSON);
                    $("content").fadeIn(5000);
                    var tmp = document.getElementById('weatherHeader').innerHTML;
                    document.getElementById('weatherHeader').innerHTML = localStorage.getItem('uname') + ", " + tmp;
                }
            }
        ajax1.open("GET", url, true);
        ajax1.send();
    };
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
                    $("content").fadeOut(1000);
                    document.body.style.backgroundColor = "#5c4f71";
                    document.getElementById('content').innerHTML = ajax1.responseText;
                    $("content").fadeIn(2000);
                    loginLoad();
                }
            }
        ajax1.open("GET", url, true);
        ajax1.send();
    };

});

function regSuccess() {
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/regsuccesful.html";
    if (ajax1) {
        ajax1.onreadystatechange =
            function() {
                if (ajax1.readyState == 4 && ajax1.status == 200) {
                    $("content").fadeOut(1000);
                    document.body.style.backgroundColor = "#5c4f71";
                    document.getElementById('content').innerHTML = ajax1.responseText;
                    $("content").fadeIn(2000);
                }
            }
        ajax1.open("GET", url, false);
        ajax1.send();
    };
};

function regFail() {
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/regfail.html";
    if (ajax1) {
        ajax1.onreadystatechange =
            function() {
                if (ajax1.readyState == 4 && ajax1.status == 200) {
                    $("content").fadeOut(1000);
                    document.body.style.backgroundColor = "#5c4f71";
                    document.getElementById('content').innerHTML = ajax1.responseText;
                    $("content").fadeIn(2000);
                }
            }
        ajax1.open("GET", url, false);
        ajax1.send();
    };
};

function loginSuccess() {
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/loginsuccess.html";
    if (ajax1) {
        ajax1.onreadystatechange =
            function() {
                if (ajax1.readyState == 4 && ajax1.status == 200) {
                    $("content").fadeOut(1000);
                    document.body.style.backgroundColor = "#d3cddd";
                    document.getElementById('content').innerHTML = ajax1.responseText;
                    $("content").fadeIn(2000);
                }
            }
        ajax1.open("GET", url, false);
        ajax1.send();
    };
};

function loginFail() {
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/loginfail.html";
    if (ajax1) {
        ajax1.onreadystatechange =
            function() {
                if (ajax1.readyState == 4 && ajax1.status == 200) {
                    $("content").fadeOut(1000);
                    document.body.style.backgroundColor = "#d3cddd";
                    document.getElementById('content').innerHTML = ajax1.responseText;
                    $("content").fadeIn(2000);
                }
            }
        ajax1.open("GET", url, false);
        ajax1.send();
    };
};


signup.addEventListener("click", function() {
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/signuppage.html";
    if (ajax1) {
        ajax1.onreadystatechange =
            function() {
                if (ajax1.readyState == 4 && ajax1.status == 200) {
                    $("content").fadeOut(1000);
                    document.body.style.backgroundColor = "#36b3dc";
                    document.getElementById('content').innerHTML = ajax1.responseText;
                    $("content").fadeIn(2000);
                    $("content").addEventListener('focusin', signupLoad());
                }
            }
        ajax1.open("GET", url, true);
        ajax1.send();
    };
});


function getHTTPObject() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}


function checkUserName() {

    var http = getHTTPObject();
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/checkdb.php";
    var uname1 = document.getElementById('loginUsername');
    var uname2 = document.getElementById('signupUsername');

    if (uname1) {
        var params = '?action=validateUsername&uname=' + uname1.value;
    } else if (uname2) {
        var params = '?action=validateUsername&uname=' + uname2.value;
    } else { exit; };

    var errorMsg = document.getElementById('badUsername');
    http.open("GET", url + params, true);

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            response = http.responseText;

            if (response == "TRUE") {
                errorMsg.innerHTML = "Username not available";
            } else { errorMsg.innerHTML = ""; }
        }
    }
    http.send();
};

function checkEmail() {
    var http = getHTTPObject();
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/checkdb.php";
    var eMail = document.getElementById('email').value;
    var badEmail = document.getElementById('badEmail');
    var params = '/validateEmail?email=' + eMail;
    http.open("GET", url + params, true);

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            $response = http.responseText;
            if ($response == 'TRUE') {
                badEmail.innerHTML = "E-Mail address already registered";
            } else {
                badEmail.innerHTML = "";
            }
        }
    }
    http.send();
};

function readWeatherFile(url, divId, isJSON) {
    /**********************************************
     * This function reads a JSON input file from the server.
     * input:   JSON Data File on the server
     * Processing:  Takes this data and converts it to a JavaScript array.
     *      It then finds the row number selected by the user and displays that data
     * Output:   JavaScript Array of data.
     *************************************************/

    // Create the object to read the file data

    // Setup the object to only run when the file has finished being loaded
    ajax2.onreadystatechange =
        //	This code is not executed immediately. It is call later when the server starts to respond.
        function() {
            // This next line checks to make sure that the file has finished being read and that it was read correctly.
            if (ajax2.readyState == 4 && ajax2.status == 200) {
                var responseText = JSON.parse(ajax2.response);
                if (isJSON) {
                    var i = 0; // Set counter variable
                    var x = 0;
                    var test = responseText.current_observation;
                    if (test === undefined) {
                        var data = responseText.forecast.simpleforecast.forecastday;

                        for (index in data) {
                            document.getElementById('day' + index).innerHTML = data[index]['date']['weekday_short'];
                            document.getElementById('day' + index + 'temp').innerHTML = data[index]['high']['fahrenheit'];
                            document.getElementById('day' + index + 'lowtemp').innerHTML = data[index]['low']['fahrenheit'];
                        }
                        document.getElementById('hightemp').innerHTML = data['0']['high']['fahrenheit'] + " F";
                        document.getElementById('lowtemp').innerHTML = data['0']['low']['fahrenheit'] + " F";
                        document.getElementById('chancepercperc').innerHTML = data['0']['pop'];
                        document.getElementById('maxwindspeed').innerHTML = data['0']['maxwind']['mph'] + " mph";

                    } else {
                        var data = responseText.current_observation;
                        document.getElementById('cityname').innerHTML = data.display_location.full;
                        document.getElementById('summary2').innerHTML = data.temp_f + " F"
                    }
                }
            }
        }
    ajax2.open("GET", url, false);
    ajax2.send();
}

/*************************************************************************
 *
 *            Login Page 
 *
 ***************************************************************************/
var current = null;

function loginLoad() {
    document.getElementById('loginUname').addEventListener('focus', function(e) {
        if (current) current.pause();
        current = anime({
            targets: 'path',
            strokeDashoffset: {
                value: 0,
                duration: 700,
                easing: 'easeOutQuart'
            },
            strokeDasharray: {
                value: '240 1386',
                duration: 700,
                easing: 'easeOutQuart'
            }
        });
    });
    document.getElementById('loginPassword').addEventListener('focus', function(e) {
        if (current) current.pause();
        current = anime({
            targets: 'path',
            strokeDashoffset: {
                value: -336,
                duration: 700,
                easing: 'easeOutQuart'
            },
            strokeDasharray: {
                value: '240 1386',
                duration: 700,
                easing: 'easeOutQuart'
            }
        });
    });
    document.querySelector('#loginSubmit').addEventListener('focus', function(e) {
        if (current) current.pause();
        current = anime({
            targets: 'path',
            strokeDashoffset: {
                value: -730,
                duration: 700,
                easing: 'easeOutQuart'
            },
            strokeDasharray: {
                value: '530 1386',
                duration: 700,
                easing: 'easeOutQuart'
            }
        });
    });
}

function loginUser() {
    var XHR = getHTTPObject();

    // Bind the FormData object and the form element
    var uname = document.getElementById('loginUname').value;
    var FD = new FormData(document.getElementById("loginForm"));

    // Set up our request
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/checkdb.php?action=loginUser";

    XHR.open("POST", url, false);

    // The data sent is what the user provided in the form
    XHR.send(FD);

    if (XHR.responseText == 'TRUE') {
        localStorage.setItem('uname', uname);
        loginSuccess();
    } else {
        localStorage.removeItem('uname');
        loginFail();

    }
}




function regUser() {
    var XHR = getHTTPObject();

    // Bind the FormData object and the form element
    var FD = new FormData(document.getElementById("signupForm"));

    // Set up our request
    var str = window.location.pathname;
    var base_url = str.slice(0, str.lastIndexOf("/"));
    var url = "//" + window.location.host + base_url + "/checkdb.php?action=register";
    XHR.open("POST", url, false);

    // The data sent is what the user provided in the form
    XHR.send(FD);
    if (XHR.response == 'TRUE') {
        regSuccess();
    } else {
        regFail();
    }
}