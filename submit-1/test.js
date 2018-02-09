//Declare your ajax variables~
var xmlhttp;
xmlhttp = new XMLHttpRequest();

var xmlhttp2;
xmlhttp2 = new XMLHttpRequest();

var xmlhttp3;
xmlhttp3 = new XMLHttpRequest();

//Step 1 (first ajax call) code will begin executing here
var zipValue = document.getElementById("zipcode").value;
if (zipValue >= 5) {
    var clientKey = 'js-6Y0CX1szujcbFwKOtyj2krPT26wKoH77a5oMg7jQdrUSTcYmI3FxvOBBnr7qXeFk';
    var url = "http://www.zipcodeapi.com/rest/" + clientKey + "/info.json/" + zipValue + "/radians";
    xmlhttp.open("get", url, true);
    // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}
//Step 2 (second ajax call) this function will be called ... later in the code!
function ajax_call_two() {
    var city = document.getElementById('city');
    var state = document.getElementById('state');
    // These next 5 lines are for getting the data from Weather Underground.
    // The apikey is unique to each user and must be updated for your own site
    var apikey = 'd704f31a50bce41f'
    var divId = '';
    var isJSON = true;

    // These  lines get and write the weather data to the weather table
    var wuurl = "http://api.wunderground.com/api/" + apikey + "/conditions/q/" + state.value + "/" + encodeURIComponent(city.value.trim()) + ".json";
    xmlhttp2.open("get", wuurl, true);
    // xmlhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp2.send();

    xmlhttp2.onreadystatechange = function() {
        if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
            //when Step 2 is finished, Step 3 is called.
            stuff_to_do_after_all_ajax_calls_are_finished();
        }
    }
}

//Step 3 (stuff_to_do_after_all_ajax_calls_are_finished. literally.) this function will be called ... later in the code!
function stuff_to_do_after_all_ajax_calls_are_finished() {
    document.getElementById("login_panel").innerHTML = xmlhttp2.responseText;
    document.getElementById("login_panel_settings").innerHTML = xmlhttp.responseText;
}

//When Step 1 is finished, Step 2 is called.
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        ajax_call_two();
    }
}