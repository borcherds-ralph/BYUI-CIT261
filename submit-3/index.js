// Application variables
var screenLoc = { x: 0, y: window.innerHeight / 2 };
var counter = 0;
var minFontSize = 6;
var angleDistortion = 5;
var letters = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// Drawing variables
var drawArea;
var contxt;
var pointer = { x: 0, y: 0, down: false }

function init() {
    drawArea = document.getElementById('canvas');
    contxt = drawArea.getContext('2d');
    drawArea.width = window.innerWidth;
    drawArea.height = window.innerHeight;

    drawArea.addEventListener('mousemove', mouseMove, false);
    drawArea.addEventListener('mousedown', mouseDown, false);
    drawArea.addEventListener('mouseup', mouseUp, false);
    drawArea.addEventListener('mouseout', mouseUp, false);
    drawArea.addEventListener('dblclick', doubleClick, false);

    window.onresize = function(event) {
        drawArea.width = window.innerWidth;
        drawArea.height = window.innerHeight;
    }
}

function mouseMove(event) {
    pointer.x = event.pageX;
    pointer.y = event.pageY;
    draw();
}

function draw() {
    if (pointer.down) {
        var d = distance(screenLoc, pointer);
        var fontSize = minFontSize + d / 2;
        var letter = letters[counter];
        var stepSize = textWidth(letter, fontSize);

        if (d > stepSize) {
            var angle = Math.atan2(pointer.y - screenLoc.y, pointer.x - screenLoc.x);

            contxt.font = fontSize + "px Georgia";

            contxt.save();
            contxt.translate(screenLoc.x, screenLoc.y);
            contxt.rotate(angle);
            contxt.fillText(letter, 0, 0);
            contxt.restore();

            counter++;
            if (counter > letters.length - 1) {
                counter = 0;
            }

            // console.log(screenLoc.x + Math.cos(angle) * stepSize)
            screenLoc.x = screenLoc.x + Math.cos(angle) * stepSize;
            screenLoc.y = screenLoc.y + Math.sin(angle) * stepSize;

        }
    }
}

function distance(pt, pt2) {

    var xs = 0;
    var ys = 0;

    xs = pt2.x - pt.x;
    xs = xs * xs;

    ys = pt2.y - pt.y;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
}

function mouseDown(event) {
    pointer.down = true;
    screenLoc.x = event.pageX;
    screenLoc.y = event.pageY;

    document.getElementById('info').style.display = 'none';
}

function mouseUp(event) {
    pointer.down = false;
}

function doubleClick(event) {
    drawArea.width = drawArea.width;
}

function textWidth(string, size) {
    contxt.font = size + "px Georgia";

    if (contxt.fillText) {
        return contxt.measureText(string).width;
    } else if (contxt.mozDrawText) {
        return contxt.mozMeasureText(string);
    }

};

init();