function read_txt(textFile) {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', textFile);
    xhr.onload = loadText;
    xhr.send();
}

function loadText() {
    // var pre = document.createElement
    console.log(this.response);
}

read_txt('test.txt');