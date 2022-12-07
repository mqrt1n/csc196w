function save() {
    var content = document.getElementById("text").value;
    localStorage.setItem("text", content);
}

function load() {
    var content = localStorage.getItem("text");
    document.getElementById("text").value = content;
}