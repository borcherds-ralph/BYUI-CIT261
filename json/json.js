function parseData() {
    /**********************************************
     * This function takes a JSON string and converts it to a JavaScript Array with named elements.
     * input:   JSON formatted Text String
     * Processing:  Takes this data and converts it to a JavaScript named array
     * Output:   JavaScript Array
     *************************************************/

    // Get the pasted sting
    var data = document.getElementById("record").value;
    // Parse the string and place it into an ARRAY
    var mydata = JSON.parse(data);

    /* create the HTML output from the ARRAY by names items.
       You can get the data by reference number like mydata[0]
       The issue with that approach is if the items change order then the output 
       data will not be in the correct order
    */
    var output = "Record ID: " + mydata.id + "<br>";
    output = output + "First Name: " + mydata.first_name + "<br>";
    output = output + "Last Name: " + mydata.last_name + "<br>";
    output = output + "eMail: " + mydata.email + "<br>";

    // Write the output to the HTML page
    document.getElementById("output").innerHTML = output;


}




function createJSONstring() {
    /**********************************************
     * This function creates a JSON string from data on a form.
     * input:   Data on an HTML Form  
     *    Site, location, elevation, country
     * Processing:  Takes this data and converts it to a JavaScript array then to a JSON String
     * Output:   JSON String
     *************************************************/

    // Get the List of HTML FORM Elements
    var items = document.getElementById("form1").elements;
    // Create new object to hold data
    var data = new Object();
    // set the counter variable 
    var i = 0;
    // Start to loop through the form elements
    for (i; i < items.length; i++) {
        /* This if is to show you that you can limit your selection to just one type of data. 
           This line can be ommitted if you want to test with various data types
        */
        if (items[i].type == "text")
        /* This creates the Data Array by looping through the FORM Elements
           items[i].id is the id name from the HTML FORM elements
           items[i].value is the value in those fields
           The left side of the = is setting the name of the variable
           The right side of the = is setting the value of the named variable
        */
            data[items[i].id] = items[i].value;
    }
    // This converts the DATA ARRAY into a JSON String
    var mydata = JSON.stringify(data);

    // These next two lines write out the JSON string to the web page
    var output = "JSON String:  " + mydata + "<br>";
    document.getElementById("jsonoutput").innerHTML = output;
}

function readFile(url, divId, isJSON) {
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
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            //	This method is going to serve a several kinds of requests
            //	we are taking the 2nd and 3rd fields from the onclick request and passing them to the worked function
                if (url.includes("http") == true || url.includes("https") == true) {
                    doSomethingWithTheResponse2(xmlhttp.responseText, divId, isJSON);
                } else {
                    doSomethingWithTheResponse(xmlhttp.responseText, divId, isJSON);
                }
                // This is code to help debug the file reading process.
                //	else	// this will show us what is happening before the data arrives
                //		document.getElementById( 'serverState' ).innerHTML += "Ready State: " + xmlhttp.readyState + "  Status: " + xmlhttp.status + "<BR>";
        }
        //	This is where we make our request to the server. We pass along the URL for the file we want
        //	You can see the name of the file we are requesting in the about HTML code.
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function doSomethingWithTheResponse(response, divId, isJSON) {
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
        // Get the record number that the user wants to display and subtract 1
        // JavaScript arrays start at 0 but the data starts at 1
        var rownum = document.getElementById("rownum").value - 1;

        // Get the row number from the first level array and create a new array with just that data
        var data = responseText[rownum];
        // Get the names of the variable names in the string
        var names = Object.keys(data)
            // create a variable to output the data to the HTML page
        var responses = "";

        // Loop through the variables in the array and create the output
        for (i; i < names.length; i++) {
            // names[i] is the named element name
            // data[names[i]] is the value of the elemet.  
            // This is calling the elements by name and not by reference number
            responses += names[i] + ": " + data[names[i]] + "<br>";
        }
        // This writes out the row selected to the screen
        document.getElementById(divId + "2").innerHTML = "Just the text<br>" + responses;
    } else {
        // If the file is not a JSON file then the entire contents are written out.
        document.getElementById(divId).innerHTML = responseText;
    }
}

function doSomethingWithTheResponse2(response, divId, isJSON) {
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
        var data = responseText.current_observation;
        // Get the names of the variable names in the string
        var names = Object.keys(data)
            // create a variable to output the data to the HTML page
        var responses = "";

        // Loop through the variables in the array and create the output
        for (i; i < names.length; i++) {
            // names[i] is the named element name
            // data[names[i]] is the value of the elemet.  
            // This is calling the elements by name and not by reference number
            responses += names[i] + ": " + data[names[i]] + "<br>";
        }
        // This writes out the row selected to the screen
        document.getElementById(divId + "2").innerHTML = "Just the text<br>" + responses;
    } else {
        // If the file is not a JSON file then the entire contents are written out.
        document.getElementById(divId).innerHTML = responseText;
    }
}