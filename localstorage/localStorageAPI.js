// Local Storage API
var k = "";
var v = "";
var storeArry = new Object();

function doFirst() {
    var fileName = location.pathname.split("/").slice(-1)
    if (fileName == "localstorage.html") {
        var saveButton = document.getElementById("saveButton");
        var remButton = document.getElementById("remButton");
        var clrButton = document.getElementById("clrButton");
        saveButton.addEventListener("click", saveInfo, false);
        remButton.addEventListener("click", removeInfo, false);
        clrButton.addEventListener("click", clearLocalStore, false);
        display();
    }
}

function saveInfo() {
    k = document.getElementById("person").value;
    v = document.getElementById("age").value;
    localStorage.setItem(k, v);
    display();
    document.getElementById("person").value = "";
    document.getElementById("age").value = "";
}

function arrayStore() {
    var rightbox = document.getElementById("rightbox");
    storeArry = {};
    rightbox.innerHTML = "";
    for (i = 0; i < localStorage.length; i++) {
        var a = localStorage.key(i);
        var b = localStorage.getItem(a);
        storeArry[a] = b;
    }
}

function display() {
    arrayStore();
    rightbox.innerHTML = "<strong>Local Storage Items:</strong><br />";
    for (var j in storeArry) {
        rightbox.innerHTML += j + ": " + storeArry[j] + "<br />";
    }
}

function removeInfo() {
    var r = document.getElementById("person").value;
    localStorage.removeItem(r);
    display();
}

function clearLocalStore() {
    localStorage.clear();
    display();
}

function arrayStoreWeather() {
    storeArry = {};
    for (i = 0; i < localStorage.length; i++) {
        var a = localStorage.key(i);
        var b = localStorage.getItem(a);
        storeArry[a] = b;
    }
}

function writeLocalWeather() {
    arrayStoreWeather();
    if (storeArry.length != 0) {
        document.getElementById('cityname').innerHTML = storeArry['full'];
        document.getElementById('maxwindspeed').innerHTML = storeArry['maxwind'];
        document.getElementById('summary2').innerHTML = storeArry['temp_f'] + " F";
        document.getElementById('hightemp').innerHTML = storeArry['todayhigh'] + " F";
        document.getElementById('lowtemp').innerHTML = storeArry['todaylow'] + " F";
        document.getElementById('chancepercperc').innerHTML = storeArry['percip'] + " %";
        document.getElementById('day0').innerHTML = storeArry['day0'];
        document.getElementById('day1').innerHTML = storeArry['day1'];
        document.getElementById('day2').innerHTML = storeArry['day2'];
        document.getElementById('day3').innerHTML = storeArry['day3'];
        document.getElementById('day4').innerHTML = storeArry['day4'];
        document.getElementById('day5').innerHTML = storeArry['day5'];
        document.getElementById('day6').innerHTML = storeArry['day6'];
        document.getElementById('day7').innerHTML = storeArry['day7'];
        document.getElementById('day8').innerHTML = storeArry['day8'];
        document.getElementById('day9').innerHTML = storeArry['day9'];
        document.getElementById('day0temp').innerHTML = storeArry['day0-high'];
        document.getElementById('day1temp').innerHTML = storeArry['day1-high'];
        document.getElementById('day2temp').innerHTML = storeArry['day2-high'];
        document.getElementById('day3temp').innerHTML = storeArry['day3-high'];
        document.getElementById('day4temp').innerHTML = storeArry['day4-high'];
        document.getElementById('day5temp').innerHTML = storeArry['day5-high'];
        document.getElementById('day6temp').innerHTML = storeArry['day6-high'];
        document.getElementById('day7temp').innerHTML = storeArry['day7-high'];
        document.getElementById('day8temp').innerHTML = storeArry['day8-high'];
        document.getElementById('day9temp').innerHTML = storeArry['day9-high'];
        if (storeArry['windchill_string'] !== 'NA') {
            document.getElementById('windchill').classList.remove('hiddenitems');
            document.getElementById('windchillnow').innerHTML = storeArry['windchill_f'];
        }
    } else {
        document.getElementById('forecast').innerHTML = "<p>There is no weather data to display. Please go back one page and get the weather info first</p>";
    }
}

function getCity() {
    var zip = document.getElementById("zipCode").value;
    var xhr;
    var appkey = "eWzIJHIopGo2PASnAQglBRPpRLsndHhTLs25QkoAxgBkRSlwrDCgFWE0kwH5Ay48";
    var url = "https://www.zipcodeapi.com/rest/" + clientKey + "/info.json/" + zip + "/radians";
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        xhr = new XMLHttpRequest();
    }
    var city = "book_name=" + book;
    xhr.open("POST", "book-suggestion.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}

window.addEventListener("load", doFirst, false);