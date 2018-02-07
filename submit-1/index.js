var ajax = getHTTPObject();
var clientKey = 'js-6Y0CX1szujcbFwKOtyj2krPT26wKoH77a5oMg7jQdrUSTcYmI3FxvOBBnr7qXeFk';

function getHTTPObject() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function updateCityState() {
    if (ajax) {
        var zipValue = document.getElementById("zipcode").value;
        if (zipValue >= 5) {
            var url = "http://www.zipcodeapi.com/rest/" + clientKey + "/info.json/" + zipValue + "/radians";
            xmlhttp = ajax;
            xmlhttp.onreadystatechange =
                function() {

                    // This next line checks to make sure that the file has finished being read and that it was read correctly.
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var data = JSON.parse(xmlhttp.responseText);
                        var city = document.getElementById('city');
                        var state = document.getElementById('state');

                        city.value = data['city'];
                        state.value = data['state'];

                        var url = "http://api.wunderground.com/api/d704f31a50bce41f/conditions/q/" + state.value + "/" + encodeURIComponent(city.value.trim()) + ".json";
                        var url2 = "http://api.wunderground.com/api/d704f31a50bce41f/forecast10day/q/" + state.value + "/" + encodeURIComponent(city.value.trim()) + ".json";
                        var divId = '';
                        var isJSON = true;
                        localStorage.clear();
                        readWeatherFile(url, divId, isJSON);
                        readWeatherFile(url2, divId, isJSON);
                        storeArry = {};
                        for (i = 0; i < localStorage.length; i++) {
                            var a = localStorage.key(i);
                            var b = localStorage.getItem(a);
                            storeArry[a] = b;
                        }
                        writeLocalWeather(storeArry);
                    }
                }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();

        }


    }
}

function writeLocalWeather(storeArry) {

    // document.getElementById('cityname').innerHTML = localStorage.getItem('full');
    // document.getElementById('maxwindspeed').innerHTML = localStorage.getItem('maxwind');
    // document.getElementById('summary2').innerHTML = localStorage.getItem('temp_f') + " F";
    // document.getElementById('hightemp').innerHTML = localStorage.getItem('todayhigh') + " F";
    // document.getElementById('lowtemp').innerHTML = localStorage.getItem('todaylow') + " F";
    // document.getElementById('chancepercperc').innerHTML = localStorage.getItem('percip') + " %";
    // document.getElementById('day0').innerHTML = localStorage.getItem('day0');
    // document.getElementById('day1').innerHTML = localStorage.getItem('day1');
    // document.getElementById('day2').innerHTML = localStorage.getItem('day2');
    // document.getElementById('day3').innerHTML = localStorage.getItem('day3');
    // document.getElementById('day4').innerHTML = localStorage.getItem('day4');
    // document.getElementById('day5').innerHTML = localStorage.getItem('day5');
    // document.getElementById('day6').innerHTML = localStorage.getItem('day6');
    // document.getElementById('day7').innerHTML = localStorage.getItem('day7');
    // document.getElementById('day8').innerHTML = localStorage.getItem('day8');
    // document.getElementById('day9').innerHTML = localStorage.getItem('day9');
    // document.getElementById('day0temp').innerHTML = localStorage.getItem('day0-high');
    // document.getElementById('day1temp').innerHTML = localStorage.getItem('day1-high');
    // document.getElementById('day2temp').innerHTML = localStorage.getItem('day2-high');
    // document.getElementById('day3temp').innerHTML = localStorage.getItem('day3-high');
    // document.getElementById('day4temp').innerHTML = localStorage.getItem('day4-high');
    // document.getElementById('day5temp').innerHTML = localStorage.getItem('day5-high');
    // document.getElementById('day6temp').innerHTML = localStorage.getItem('day6-high');
    // document.getElementById('day7temp').innerHTML = localStorage.getItem('day7-high');
    // document.getElementById('day8temp').innerHTML = localStorage.getItem('day8-high');
    // document.getElementById('day9temp').innerHTML = localStorage.getItem('day9-high');
    // if (localStorage.getItem('windchill_string') !== 'NA') {
    //     document.getElementById('windchill').classList.remove('hiddenitems');
    //     document.getElementById('windchillnow').classList.remove('hiddenitems');
    //     document.getElementById('windchillnow').innerHTML = localStorage.getItem('windchill_f');
    // }
    (function() {
        document.getElementById('cityname').innerHTML = storeArry.full;
        document.getElementById('maxwindspeed').innerHTML = storeArry.maxwind;
        document.getElementById('summary2').innerHTML = storeArry.temp_f + " F";
        document.getElementById('hightemp').innerHTML = storeArry.todayhigh + " F";
        document.getElementById('lowtemp').innerHTML = storeArry.todaylow + " F";
        document.getElementById('chancepercperc').innerHTML = storeArry.percip + " %";
        document.getElementById('day0').innerHTML = storeArry.day0;
        document.getElementById('day1').innerHTML = storeArry.day1;
        document.getElementById('day2').innerHTML = storeArry.day2;
        document.getElementById('day3').innerHTML = storeArry.day3;
        document.getElementById('day4').innerHTML = storeArry.day4;
        document.getElementById('day5').innerHTML = storeArry.day5;
        document.getElementById('day6').innerHTML = storeArry.day6;
        document.getElementById('day7').innerHTML = storeArry.day7;
        document.getElementById('day8').innerHTML = storeArry.day8;
        document.getElementById('day9').innerHTML = storeArry.day9;
        document.getElementById('day0temp').innerHTML = storeArry.day0high;
        document.getElementById('day1temp').innerHTML = storeArry.day1high;
        document.getElementById('day2temp').innerHTML = storeArry.day2high;
        document.getElementById('day3temp').innerHTML = storeArry.day3high;
        document.getElementById('day4temp').innerHTML = storeArry.day4high;
        document.getElementById('day5temp').innerHTML = storeArry.day5high;
        document.getElementById('day6temp').innerHTML = storeArry.day6high;
        document.getElementById('day7temp').innerHTML = storeArry.day7high;
        document.getElementById('day8temp').innerHTML = storeArry.day8high;
        document.getElementById('day9temp').innerHTML = storeArry.day9high;
        if (storeArry.windchill_string !== 'NA') {
            document.getElementById('windchill').classList.remove('hiddenitems');
            document.getElementById('windchillnow').classList.remove('hiddenitems');
            document.getElementById('windchillnow').innerHTML = storeArry.windchill_f;
        } else {
            document.getElementById('windchill').classList.add('hiddenitems');
            document.getElementById('windchillnow').classList.add('hiddenitems');
        }
        var show = document.querySelector("#forecast");
        show.style.display = "none";
        show.style.display = "flex";
    })
}


function showTable() {


    var show = document.querySelector("#forecast");
    var btn = document.getElementById('showTable');
    var btn2 = document.getElementById('hideTable');
    show.style.display = "flex";
    btn.style.display = "none";
    btn2.style.display = "flex";


}

function hideTable() {
    var show = document.querySelector("#forecast");
    show.style.display = "none";
    var btn = document.getElementById('showTable');
    var btn2 = document.getElementById('hideTable');
    btn.style.display = "flex";
    btn2.style.display = "none";
}