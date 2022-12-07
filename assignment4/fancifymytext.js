function bigger() {
    document.getElementById("myText").style.fontSize = "24pt";
}

function fancy() {
    document.getElementById("myText").style.fontWeight = "bold";
    document.getElementById("myText").style.color = "blue";
    document.getElementById("myText").style.textDecoration = "underline";
}

function boring() {
    document.getElementById("myText").style.fontWeight = "normal";
    document.getElementById("myText").style.color = "black";
    document.getElementById("myText").style.textDecoration = "none";
}

function moo() {
    var str = document.getElementById("myText");
    var parts = str.value.split(".");
    str.value = parts.join("-Moo");
}