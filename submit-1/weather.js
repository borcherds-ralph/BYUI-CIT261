function readWeatherFile(url, divId, isJSON) {
    /**********************************************
     * This function reads a JSON input file from the server.
     * input:   JSON Data File on the server
     * Processing:  Takes this data and converts it to a JavaScript array.
     *      It then finds the row number selected by the user and displays that data
     * Output:   JavaScript Array of data.
     *************************************************/

    // Create the object to read the file data
    var xmlhttp = new XMLHttpRequest();
    // Setup the object to only run when the file has finished being loaded
    xmlhttp.onreadystatechange =
        //	This code is not executed immedidaitely. It is call later when the server starts to respond.
        function() {
            // This next line checks to make sure that the file has finished being read and that it was read correctly.
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                writeDatatolocalStorage(xmlhttp.responseText, divId, isJSON);
            } else { // this will show us what is happening before the data arrives
                // document.getElementById('serverState').innerHTML += "Ready State: " + xmlhttp.readyState + "  Status: " + xmlhttp.status + "<BR>";
            }
        }
    xmlhttp.open("GET", url, isJSON);
    xmlhttp.send();
}


function writeDatatolocalStorage(response, divId, isJSON) {
    /**********************************************
     * This function takes the file that was read and exicutes what we want done with it
     * input:   JSON Data File, 
     *       The DIV ID where the out needs to be written, 
     *       is this file a JSON file
     * Processing:  Takes this data and converts it to a JavaScript array.
     *      It then finds the row number selected by the user and displays that data
     * Output:   JavaScript Array of data.
     *************************************************/
    var responseText = (isJSON) ? JSON.parse(response) : response;

    //	Now we will take the text and do something with it
    if (isJSON) {
        var i = 0; // Set counter variable
        var x = 0;
        var test = responseText.current_observation;
        if (test === undefined) {
            var data = responseText.forecast.simpleforecast.forecastday;

            for (index in data) {
                localStorage.setItem('day' + index, data[index]['date']['weekday_short']);
                localStorage.setItem('day' + index + 'high', data[index]['high']['fahrenheit']);
                localStorage.setItem('day' + index + 'low', data[index]['low']['fahrenheit']);
            }
            localStorage.setItem('todayhigh', data['0']['high']['fahrenheit']);
            localStorage.setItem('todaylow', data['0']['low']['fahrenheit']);
            localStorage.setItem('percip', data['0']['pop']);
            localStorage.setItem('maxwind', data['0']['maxwind']['mph'] + " mph");
            console.log(localStorage);
        } else {
            var data = responseText.current_observation;
            var location = data.display_location;
            var names = Object.keys(data);
            var locnames = Object.keys(location);

            // Loop through the variables in the array and create the output
            for (i; i < names.length; i++) {
                localStorage.setItem(names[i], data[names[i]]);
            }
            for (x; x < locnames.length; x++) {
                localStorage.setItem(locnames[x], location[locnames[x]]);
            }
        }
    }
}