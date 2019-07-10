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

function update_table() {
    var date = new Date();

    hours = fixedWidthBinary(date.getHours());
    minutes = fixedWidthBinary(date.getMinutes());
    seconds = fixedWidthBinary(date.getSeconds());

    var binary_time = [hours, minutes, seconds]

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var table = document.getElementById("binary_table");
  
    table.innerHTML="";
  
    for (var i = 0; i < 3; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 6; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(binary_time[i][j]);
            if(binary_time[i][j] == "1")
            {
                cell.classList.add("bg-success");
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
        table.appendChild(tblBody);
    }
}

function show_time() {
    document.getElementById("decimal_time").innerHTML = getCurrentTime();
    document.getElementById("title_binary_time").innerHTML = getCurrentBinaryTime();
    document.getElementById("shown_binary_time").innerHTML = getCurrentBinaryTime();
    update_table();
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