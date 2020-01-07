

var nrCautat = Math.floor(Math.random() * 100);
var incercariRamase = 7;
var gasit = false;

function incercari() {
    var nr = document.getElementById("numar").value;

    if (conditiiDeOprire() == false) {
        return;
    }
    
    verifica(nr);
    incercariRamase--;
    document.getElementById("nrIncercari").innerHTML = incercariRamase;
    if (incercariRamase == 0) {
        document.getElementById("verificare").innerHTML = "Numarul era = " + nrCautat;
    }

}

function conditiiDeOprire() {
    if (gasit == true) {
        return false;
    }
    if (incercariRamase == 0) {
        return false;
    }
    return true;
}

function verifica(nr) {

    if (nrCautat == nr) {
        gasit = true;
        document.getElementById("buton").style.backgroundColor = "green";

        document.getElementById("verificare").innerHTML = "Ai ghicit!";

    }
    else if (nrCautat >= nr) {
        document.getElementById("verificare").innerHTML = "Prea mic";
    }
    else {
        document.getElementById("verificare").innerHTML = "Prea mare";
    }
}