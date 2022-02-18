var nodoPartenza;
var nodoDestinazione;
var nodoDistanza;
var nodoMacchina;
var nodoTreno;
var nodoTempo;
var nodoMessaggioAvvertenza;


const distanze = {
    pisa :  {
        pisa    : 0,
        roma    : 370,
        milano  : 280,
        firenze : 88,
        venezia : 415,
        trieste : 475,
        napoli  : 560
    },
    
    roma :  {
        pisa    : 370,
        roma    : 0,
        milano  : 625,
        firenze : 275,
        venezia : 526,
        trieste : 674,
        napoli  : 226
    },

    milano : {
        pisa    : 280,
        roma    : 625,
        milano  : 0,
        firenze : 307,
        venezia : 268,
        trieste : 415,
        napoli  : 774
    },

    firenze : {
        pisa    : 88,
        roma    : 275,
        milano  : 307,
        firenze : 0,
        venezia : 269,
        trieste : 417,
        napoli  : 472
    },

    venezia : {
        pisa    : 415,
        roma    : 526,
        milano  : 268,
        firenze : 269,
        venezia : 0,
        trieste : 161,
        napoli  : 725
    },

    trieste : {
        pisa    : 475,
        roma    : 674,
        milano  : 415,
        firenze : 417,
        venezia : 161,
        trieste : 0,
        napoli  : 873
    },

    napoli : {
        pisa    : 560,
        roma    : 226,
        milano  : 774,
        firenze : 472,
        venezia : 725,
        trieste : 873,
        napoli  : 0
    }
}

const distanzaTempoViaggio = [
    {
        distanza : 370,
        auto     : 240,
        treno    : 150
    },
    
    {
        distanza : 280,
        auto     : 200,
        treno    : 210
    },
    
    {
        distanza : 88,
        auto     : 100,
        treno    : 75,
    },

    {
        distanza : 415,
        auto     : 260,
        treno    : 210
    },

    {
        distanza : 475,
        auto     : 330,
        treno    : 330
    },

    {
        distanza : 560,
        auto     : 390,
        treno    : 266
    },

    {
        distanza : 625,
        auto     : 470,
        treno    : 210
    },

    {
        distanza : 275,
        auto     : 240,
        treno    : 90
    },

    {
        distanza : 526,
        auto     : 460,
        treno    : 260,
    },

    {
        distanza : 674,
        auto     : 440,
        treno    : 400
    },

    {
        distanza : 226,
        auto     : 180,
        treno    : 80
    },

    {
        distanza : 307,
        auto     : 210,
        treno    : 110
    },

    {
        distanza : 268,
        auto     : 230,
        treno    : 150
    },

    {
        distanza : 415,
        auto     : 320,
        treno    : 260
    },

    {
        distanza : 774,
        auto     : 400,
        treno    : 280
    },
    
    {
        distanza : 269,
        auto     : 160,
        treno    : 134
    },

    {
        distanza : 417,
        auto     : 240,
        treno    : 264
    },

    {
        distanza : 472,
        auto     : 250,
        treno    : 176
    },

    {
        distanza : 161,
        auto     : 100,
        treno    : 125
    },

    {
        distanza : 725,
        auto     : 380,
        treno    : 329
    },

    {
        distanza : 873,
        auto     : 469,
        treno    : 432
    }
];


function gestoreLoad () {
    try {
        nodoPartenza = document.getElementById("whereFrom");
        nodoDestinazione = document.getElementById("whereTo");
        nodoDistanza = document.getElementById("distanza");
        nodoMacchina = document.getElementById("macchina");
        nodoTreno = document.getElementById("treno");
        nodoTempo = document.getElementById("tempo");
        nodoMessaggioErrore = document.getElementById("messaggioErrore")
        nodoMessaggioAvvertenza = document.getElementById("messaggioAvvertenza");
        nodoDistanza.value = "";

        var PartenzaCorrente = "";
        var destinazioneCorrente = "";
        var distanzaCorrente = "";
        var nodoErrore = document.createTextNode("");
        nodoMessaggioErrore.appendChild(nodoErrore);
        var nodoAvvertenza = document.createTextNode("");
        nodoMessaggioAvvertenza.appendChild(nodoAvvertenza);

        
        nodoPartenza.onchange = impostaViaggio1; 
        nodoDestinazione.onchange = impostaViaggio2;
        nodoMacchina.onclick = mostraTempoMacchina; 
        nodoTreno.onclick = mostraTempoTreno;
        
                
    }   catch   ( e )   {
        alert("gestoreLoad " + e);
    }
}
window.onload = gestoreLoad;

function mostraErrore (nodo, messaggio) {
    var nodoErrore = document.createTextNode(messaggio);
    nodo.replaceChild(nodoErrore, nodo.firstChild);
}

function mostraAvvertenza (nodo, messaggio) {
    var nodoAvvertenza = document.createTextNode(messaggio);
    nodo.replaceChild(nodoAvvertenza, nodo.firstChild);
}

function impostaViaggio1 () {
    try{        
        mostraErrore(nodoMessaggioErrore, "");
        mostraAvvertenza(nodoMessaggioAvvertenza, "");
        nodoTempo.value = "";
        nodoDistanza.value = "";
        partenzaCorrente = nodoPartenza.value;
        destinazioneCorrente = nodoDestinazione.value;
        
        
        if ((partenzaCorrente == "whereFrom") || (destinazioneCorrente == "whereTo")) {
            nodoDistanza.value = "";
        } else {
            distanzaCorrente = distanze[partenzaCorrente][destinazioneCorrente];
            nodoDistanza.value = distanzaCorrente;
        }            
        
             
        

    }   catch   ( e )   {
        alert("impostaViaggio1 " + e);
    }

}


function impostaViaggio2 () {
    try{        
        mostraErrore(nodoMessaggioErrore, "");
        mostraAvvertenza(nodoMessaggioAvvertenza, "");
        nodoTempo.value = "";
        nodoDistanza.value = "";
        partenzaCorrente = nodoPartenza.value;
        destinazioneCorrente = nodoDestinazione.value;
        
        
        if ((partenzaCorrente == "whereFrom") || (destinazioneCorrente == "whereTo")) {
            nodoDistanza.value = "";     
        } else {
            distanzaCorrente = distanze[partenzaCorrente][destinazioneCorrente];
            var i = 0;
            while ((i < distanzaTempoViaggio.length) && (distanzaTempoViaggio[i].distanza != distanzaCorrente)) {
                i++;
            }
            
            nodoDistanza.value = distanzaCorrente;
        }            

    }   catch   ( e )   {
        alert("impostaViaggio2 " + e);
    }

}


function mostraTempoMacchina () {
    try {
        mostraErrore(nodoMessaggioErrore, "");
        mostraAvvertenza(nodoMessaggioAvvertenza, "");
        
        tempoAuto  = "";
        partenzaCorrente = nodoPartenza.value;
        destinazioneCorrente = nodoDestinazione.value;     

        if (nodoDistanza.value  == "") {
            mostraErrore(nodoMessaggioErrore,"Per favore, selezionare luogo di partenza e destinazione.");
            return; 
        } else  if (nodoDistanza.value  == "0") {
            mostraErrore(nodoMessaggioErrore,"Luogo di partenza e destinazione sono uguali, per favore scegliere luoghi diversi.");
            return;
        } else {
            distanzaCorrente = distanze[partenzaCorrente][destinazioneCorrente];
            var i = 0;
            while ((i < distanzaTempoViaggio.length) && (distanzaTempoViaggio[i].distanza != distanzaCorrente)) {
                i++;
            }
            nodoTempo.value = distanzaTempoViaggio[i].auto;            
            mostraAvvertenza(nodoMessaggioAvvertenza, "Il tempo di viaggio potrebbe variare a seconda del livello del traffico");             
        }
        
    }   catch   ( e )   {
        alert("mostraTempoMacchina " + e);
    }

}

function mostraTempoTreno ()    {
    try {
        mostraErrore(nodoMessaggioErrore, "");
        mostraAvvertenza(nodoMessaggioAvvertenza, "");
        
        tempoTreno  = "";
        partenzaCorrente = nodoPartenza.value;
        destinazioneCorrente = nodoDestinazione.value;
        tempoTreno = distanzaTempoViaggio.treno;
        
        if (nodoDistanza.value == "") {
            mostraErrore(nodoMessaggioErrore,"Per favore, selezionare luogo di partenza e destinazione.");
            return; 
        } else  if (nodoDistanza.value  == "0") {
            mostraErrore(nodoMessaggioErrore,"Luogo di partenza e destinazione sono uguali, per favore scegliere luoghi diversi.");
            return;
        } else {
            distanzaCorrente = distanze[partenzaCorrente][destinazioneCorrente];
            var i = 0;
            while ((i < distanzaTempoViaggio.length) && (distanzaTempoViaggio[i].distanza != distanzaCorrente)) {
                i++;
            }
            nodoTempo.value = distanzaTempoViaggio[i].treno;             
            mostraAvvertenza(nodoMessaggioAvvertenza, "Il tempo di viaggio potrebbe variare a seconda della gestione di Trenitalia");             
        }
        
    }   catch   ( e )   {
        alert("mostraTempoTreno " + e);
    }

}

