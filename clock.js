function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getCurrentTime() {
    var date = new Date();

    hours = addZero(date.getHours());
    minutes = addZero(date.getMinutes());
    seconds = addZero(date.getSeconds());


    return (hours + ":" + minutes + ":" + seconds);
}

function asBinary(integer) {
    return parseInt(integer, 10).toString(2);
}

function fixedWidthBinary(time) {
    binary = asBinary(time);
    fixedWidth = 6;


    binary = String(binary);
    initialLength = binary.length;

    if (initialLength < fixedWidth) {
        for (i = 0; i < fixedWidth - initialLength; i++) {
            binary = "0" + binary;
        }
    }
    return binary;
}

function getCurrentBinaryTime() {
    var date = new Date();

    hours = fixedWidthBinary(date.getHours());
    minutes = fixedWidthBinary(date.getMinutes());
    seconds = fixedWidthBinary(date.getSeconds());


    return (hours + ":" + minutes + ":" + seconds);
}

function show_time() {
    document.getElementById("decimal_time").innerHTML = getCurrentTime();
    document.getElementById("title_binary_time").innerHTML = getCurrentBinaryTime();
    document.getElementById("shown_binary_time").innerHTML = getCurrentBinaryTime();
}

window.onload = function start() {
    update_time();
}

function update_time() {
    show_time();
    window.setInterval(function () {
        show_time();
    }, 1000);
}