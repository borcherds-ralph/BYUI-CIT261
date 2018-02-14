function requestsAreComplete(requests) {
    return requests.every(function(request) {
        return request.readyState == 4;
    });
}

function unsuccessfulRequests(requests) {
    var unsuccessful = requests.filter(function(request) {
        return request.status != 200;
    });
    return unsuccessful.length ? unsuccessful : null;
}

function onRequestsComplete(requests, callback) {
    // Wrap callback into a function that checks for all requests completion     
    function sharedCallback() {
        if (requestsAreComplete(requests)) {
            callback(requests, unsuccessfulRequests(requests));
        }
    }

    // Assign the shared callback to each request's `onreadystatechange`
    requests.forEach(function(request) {
        request.onreadystatechange = sharedCallback;
    });
}

onRequestsComplete([xmlhttp, xmlhttp2], function(requests, unsuccessful) {
    if (unsuccessful) { return; } // Abort if some requests failed


});