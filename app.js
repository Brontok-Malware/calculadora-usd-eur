var h = document.getElementById("title-1");
h.innerHTML = "Calculadora EUR a USD";
var input = document.getElementById("money");
var usd_eur = document.getElementById("usd-btn");
var eur_usd = document.getElementById("eur-btn");
var result = document.getElementById("result");
function hu (a) {
    return (a * 1.24156).toFixed(2);
}
function he (a) {
    return (a * 0.805613).toFixed(2);
}
function cu () {
    result.innerHTML = hu(input.value);
}
function ce () {
    result.innerHTML = he(input.value);
}
eur_usd.addEventListener("click",cu);
usd_eur.addEventListener("click", ce);