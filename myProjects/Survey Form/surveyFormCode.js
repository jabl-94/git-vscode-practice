//Background color change code//
var colors = ["red", "blue", "green", "purple"];
var colorIndex = 0;
function changeColor() {
    try {
    var col = document.getElementById("body");
    if( colorIndex >= colors.length ) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++;
    }   catch   ( e )   {
        alert   ("changeColor " + e);
    }
}

//Submission button code// 
function submissionAccepted ()    {
    try {  
        alert("Thank you for taking the time.");
    }   catch   ( e )   {
        alert("submissionAccepted " + e + " Something went wrong");
    }
}


var submissionButton;


