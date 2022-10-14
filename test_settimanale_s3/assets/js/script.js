
function tasto(dato) {
    document.getElementById("operazioni").value += dato;
}

function risultato() {
    document.getElementById("operazioni").value = eval(document.getElementById("operazioni").value);
}

function elimina() {
    document.getElementById("operazioni").value =" ";
}

function cancella() {
    var a = document.getElementById("operazioni").value;
    document.getElementById("operazioni").value = a.substring(0, a.length - 1);
}

function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
// l'impossibilita di tornare idietro una volta premuto il bottone è voluta per questo scherzone
function troll() {
    location.replace("https://youtu.be/dQw4w9WgXcQ");
}
