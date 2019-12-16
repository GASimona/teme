
function categorieVarsta() {
    var age = document.getElementById("varsta").value;


    if (age >= 70) {
        alert("Builders")
    }
    else if (age >= 51) {
        alert("Baby Boomers")
    }
    else if (age >= 36) {
        alert("Generation X")
    }
    else if (age >= 21) {
        alert("Generation Y")
    }
    else if (age >= 6) {
        alert("Generaton Z")
    } else {
        alert("Generation Alpha")
    }
}