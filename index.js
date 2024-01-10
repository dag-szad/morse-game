const DOT = "*";
const DASH = "-";

const letters = [
    {
        e: ['*']
    },
    {
       t: ["-"] 
    }
]

let startTime;
let endTime;

const mainButton = document.querySelector("#mainButton");
const newLetter = [];

mainButton.addEventListener('mousedown', function() {
    startTime = new Date();
})

mainButton.addEventListener('mouseup', function() {
    endTime = new Date();
    const duration = endTime - startTime;
    dotDashChecker(duration);
})

function dotDashChecker(duration) { 
    if (duration <= 100) {
        console.log("This is a DOT");
        const newSymbol = "dot";

        letterCheck(newSymbol);
        console.log(newLetter);
    } else if (100 <= duration && duration <= 300) {
        console.log("This is a DASH");
        const newSymbol = "dash";

        letterCheck(newSymbol);
        console.log(newLetter);
    } else {
        console.log("This is way too long beep")
    }
}


function letterCheck(newSymbol) {
    if (newSymbol === "dot") {
        newLetter.push('*');
    } else if (newSymbol === "dash") {
        newLetter.push('-');
    } else {
        console.log("Letter check error")
    }
}