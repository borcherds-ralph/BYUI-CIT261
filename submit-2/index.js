function startRumba() {
    document.getElementById('audiocontrol').play();
    document.getElementById('fm-left').classList.add('fm-left');
    document.getElementById('fm-right').classList.add('fm-right');
    document.getElementById('left').classList.add('left');
    document.getElementById('right').classList.add('right');


}

function pauseRumba() {
    document.getElementById('audiocontrol').pause();
    document.getElementById('fm-left').classList.remove('fm-left');
    document.getElementById('fm-right').classList.remove('fm-right');
    document.getElementById('left').classList.remove('left');
    document.getElementById('right').classList.remove('right');


}

function transformRotate() {

    var nameTest = document.getElementById('name').value;
    var trans = document.getElementById('degree').value;
    document.getElementById('nameTranform').innerHTML = nameTest;
    var temp = document.querySelector('.nameTranform');
    var rotateSet = 'rotate(' + trans + 'deg)';
    document.getElementById('nameTranform').style.transform = rotateSet;

}

function transformSkew() {
    var nameTest = document.getElementById('name').value;
    var skewDeg1 = document.getElementById('skew1').value;
    var skewDeg2 = document.getElementById('skew2').value;
    document.getElementById('nameTranform').innerHTML = nameTest;
    var temp = document.querySelector('.nameTranform');
    var skewSet = 'skew(' + skewDeg1 + 'deg, ' + skewDeg2 + 'deg)';
    document.getElementById('nameTranform').style.transform = skewSet;
    document.getElementById('nameTranform').style.transform = rotateSet;

}

function addDiv() {
    var textAdd = document.createTextNode(document.getElementById('randomContent').value);
    var newDiv = document.createElement("newDiv");
    newDiv.setAttribute("id", "newDiv");
    newDiv.setAttribute("class", "newDiv");
    newDiv.appendChild(textAdd);
    document.getElementById('newcontent').appendChild(newDiv);
}

// function lastChildName() {
//     var lastChild = document.body.lastElementChild.tagName;
//     alert(lastChild);
// }


var circleOne = document.getElementsByClassName('circleDiv')[0];

document.getElementsByClassName('moveObject')[0].onclick = function() {

    if (this.innerHTML === 'Move') {
        this.innerHTML = 'Pause';
        circleOne.classList.add('horizTranslate');
    } else {
        this.innerHTML = 'Move';
        var computedStyle = window.getComputedStyle(circleOne),
            marginLeft = computedStyle.getPropertyValue('margin-left');
        circleOne.style.marginLeft = marginLeft;
        circleOne.classList.remove('horizTranslate');
    }
}

function regUsers() {
    var url = "get_data.php";
    var params = "lorem=ipsum&name=binny";
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