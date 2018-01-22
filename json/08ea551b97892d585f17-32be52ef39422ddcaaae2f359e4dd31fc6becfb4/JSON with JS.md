# What
An updated guide/collection of guides on how to access JSON data with JavaScript

[Original Question on Stack Exchange](http://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript).
- - -
## Example 1

For reading the external Local JSON file (data.json) using java script

``` js
data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';

// Mention the path of the json file in the script source along with the javascript file.

<script type="text/javascript" src="data.json></script>
<script type="text/javascript" src="javascrip.js"></script>
```

2.Get the Object from the json file
``` js
var mydata = JSON.parse(data);
 alert(mydata[0].name);
 alert(mydata[0].age);
 alert(mydata[1].name);
 alert(mydata[1].age);
```
http://www.askyb.com/javascript/load-json-file-locally-by-js-without-jquery/

- - -
## Example 2
Depending on your browser, you may access to your local files. But this may not work for all the users of your app.

To do this, you can try the instructions from here: [http://www.html5rocks.com/en/tutorials/file/dndfiles/](http://www.html5rocks.com/en/tutorials/file/dndfiles/)

Once your file is loaded, you can retrieve the data using:

``` js
var jsonData = JSON.parse(theTextContentOfMyFile);
```

