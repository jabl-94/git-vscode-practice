function loadManager () {
    try {
        euroDollarNode = document.getElementById("euroDollar");
        euroBolivarNode = document.getElementById("euroBolivar");
        dollarEuroNode = document.getElementById("dollarEuro");
        dollarBolivarNode = document.getElementById("dollarBolivar");
        bolivarDollarNode = document.getElementById("bolivarDollar");
        bolivarEuroNode = document.getElementById("bolivarEuro");
        rateNode = document.getElementById("convertionRate");
        amountNode = document.getElementById("amount");
        convertNode = document.getElementById("Convert");
        resultNode = document.getElementById("result");

        rateNode.value = "";
        amountNode.value = "";
        resultNode.value = "";
        
        resultCurrency = "";
        
        euroDollarNode.onclick = euroDollarManager;
        euroBolivarNode.onclick = euroBolivarManager;
        dollarEuroNode.onclick = dollarEuroManager;
        dollarBolivarNode.onclick = dollarBolivarManager;
        bolivarDollarNode.onclick = bolivarDollarManager;
        bolivarEuroNode.onclick = bolivarEuroManager;
        convertNode.onclick = convertionManager;

    }   catch   ( e )   {
        alert("loadManager " + e);
    }
}
window.onload = loadManager;

/*function rateManager () {
    try {
        
        }
    }   catch ( e ) {
        alert("rateManager " + e);
    }

}*/


function euroDollarManager () {
    try {
        rateNode.value = "1.13";
        resultCurrency = "Dollars";
        
    } catch ( e ) {
        alert("euroDollarManager " + e);
    }
}

function euroBolivarManager () {
    try {
        rateNode.value = 514.069;
        resultCurrency = "Bolivars";

    } catch ( e ) {
        alert("euroBolivarManager " + e);
    }
}

function dollarEuroManager () {
    try {
        rateNode.value = 0.88;
        resultCurrency = "Euros";
        
    } catch ( e ) {
        alert("dollarEuroManager " + e);
    }
}

function dollarBolivarManager () {
    try {
        rateNode.value = 452.272;
        resultCurrency = "Bolivars";
        
    } catch ( e ) {
        alert("dollarBolivarManager " + e);
    }
}

function bolivarDollarManager () {
    try {
        rateNode.value = 0.0000022;
        resultCurrency = "Dollars";
        
    } catch ( e ) {
        alert("bolivarDollarManager " + e);
    }
}

function bolivarEuroManager () {
    try {
        rateNode.value = 0.0000020;
        resultCurrency = "Euros";
        
    } catch ( e ) {
        alert("bolivarEuroManager " + e);
    }
}


function convertionManager () {
    try {
        var amount = amountNode.value;

        var result = amount * rateNode.value + " " + resultCurrency;

        resultNode.value = result;


    } catch ( e ) {
        alert("convertionManager " + e);
    }
}