//variabili globali sono lo stato della pagina//
//perche rimangono sempre nella pagina//

//i nodi vanno chiamati come li ID delli elementi//

var nodoValuta;
var nodoFattore;
var nodoImposta;
var nodoImporto;
var nodoConverti;
var nodoRisultato;

//stato della logica applicativa//
var valutaCorrente;
var fattoreCorrente;

//GestoreLoad
function gestoreLoad () {
    try {
        nodoValuta = document.getElementById("valuta");
        nodoFattore = document.getElementById("fattore");
        nodoImposta = document.getElementById("imposta");
        nodoImporto = document.getElementById("importo");
        nodoConverti = document.getElementById("converti");
        nodoRisultato = document.getElementById("risultato");
    

        nodoValuta.value = "";
        nodoFattore.value = "";
        nodoImporto.value = "";
        nodoRisultato.value = "";


        nodoImposta.onclick = gestoreImposta;
        nodoConverti.onclick = gestoreConverti;
        
    }   catch ( e ) {
            alert("gestoreLoad " + e);
    } 

}
window.onload = gestoreLoad;

//impostazione dei valori
function gestoreImposta ()  {
    try {
        valutaCorrente = nodoValuta.value;
        fattoreCorrente = nodoFattore.value;
        nodoImporto.value = "";
        nodoRisultato.value = "";
    }  catch ( e )  {
        alert("gestoreImposta " + e);
    }
}

// funzione della conversione
function gestoreConverti () {
    try {
        var importo = nodoImporto.value;

        var risultato = valutaCorrente + " " + importo * fattoreCorrente;

        nodoRisultato.value = risultato;
    }  catch ( e ) {
        alert("gestoreConverti " + e);
    }
}
