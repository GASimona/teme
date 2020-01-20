var listNr = ['0039382743024', '0040756622755', '00453211177899', '00393112227766', '0040743111223'];

console.log(listNr);
// ------------------------- Daca exista nr internationale--------------
// ------------------ varianta 1 ------------------------------------------------

// for (i = 0; i <= listNr.length - 1; i++) {
//     console.log(listNr[i]);

//     if (listNr[i].slice(2, 4) != 40) {
//         console.log('Exista cel putin un numar international');
//         break;
//     }
//     else {
//         console.log('Romania');
//     }
// }



// ------------------ varianta 2 ------------------------------------------------

var nrNrInternationale = 0;
var nrInternational = function verifica(element) {
    if (element.slice(2, 4) != 40) {
        nrNrInternationale = nrNrInternationale + 1;
        return true;
    }
    return false;
}
console.log(listNr.filter(nrInternational));
console.log('In lista sunt ' + nrNrInternationale + ' numere internationale');


// --------------- Daca toate nr sunt din aceasi tara-----------------
var listNrInternationale = ['0039382743024', '0039756622755', '00393211177899', '00393112227766', '0039743111223'];

var prefix = listNrInternationale[0].slice(0, 4);
var numarTelInt = function (element) {
    if (element.slice(0, 4) == prefix) {

        return true;
    }
    return false;
}

console.log(listNrInternationale.every(numarTelInt));

if (listNrInternationale.every(numarTelInt)) {
    console.log('Toate numerele sunt din aceasi tara');
}
else {
    console.log('Nu toate numerele sunt din aceasi tara');
}
