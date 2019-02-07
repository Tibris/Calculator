const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const modulus = document.getElementById("modulus")
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");
const resultsDiv = document.getElementById("results-div");

let number;
let secondNumber;
let operation;


function add(num1, num2) {
    resultsDiv.innerHTML =  parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    resultsDiv.innerHTML =  num1 - num2;
}

function multiply(num1, num2) {
    resultsDiv.innerHTML =  num1 * num2;
}

function divide(num1, num2) {
    resultsDiv.innerHTML =  num1 / num2;
    if(num2 == 0) {
        resultsDiv.innerHTML = "ERROR!";
    }
}

function modul(num1, num2) {
    resultsDiv.innerHTML =  num1 % num2;
}


zero.addEventListener("click", function() {
    if(resultsDiv.innerHTML.length < 9) {
        resultsDiv.innerHTML += 0;
    }
});
one.addEventListener("click", function() {
    if(resultsDiv.innerHTML.length < 9) {
        resultsDiv.innerHTML += 1;
    }
});
two.addEventListener("click", function() {
    if(resultsDiv.innerHTML.length < 9) {
        resultsDiv.innerHTML += 2;
    }
});
three.addEventListener("click", function() {
    if(resultsDiv.innerHTML.length < 9) {
        resultsDiv.innerHTML += 3;
    }
});
four.addEventListener("click", function() {
    if(resultsDiv.innerHTML.length < 9) {
        resultsDiv.innerHTML += 4;
    }
});
five.addEventListener("click", function() {
    if(resultsDiv.innerHTML.length < 9) {
        resultsDiv.innerHTML += 5;
    }
});
six.addEventListener("click", function() {
    if(resultsDiv.innerHTML.length < 9) {
        resultsDiv.innerHTML += 6;
    }
});
seven.addEventListener("click", function() {
    if(resultsDiv.innerHTML.length < 9) {
        resultsDiv.innerHTML += 7;
    }
});
eight.addEventListener("click", function() {
    if(resultsDiv.innerHTML.length < 9) {
        resultsDiv.innerHTML += 8;
    }
});
nine.addEventListener("click", function() {
    if(resultsDiv.innerHTML.length < 9) {
        resultsDiv.innerHTML += 9;
    }
});

dot.addEventListener("click", function() {
    if(resultsDiv.innerHTML.length < 9) {
        resultsDiv.innerHTML += ".";
    }
});

addition.addEventListener("click", function() {
    number = resultsDiv.innerHTML;
    resultsDiv.innerHTML = "";
    operation = "+";
});

subtraction.addEventListener("click", function() {
    number = resultsDiv.innerHTML;
    resultsDiv.innerHTML = "";
    operation = "-";
});

division.addEventListener("click", function() {
    number = resultsDiv.innerHTML;
    resultsDiv.innerHTML = "";
    operation = "/";
});

multiplication.addEventListener("click", function() {
    number = resultsDiv.innerHTML;
    resultsDiv.innerHTML = "";
    operation = "*";
});

modulus.addEventListener("click", function() {
    number = resultsDiv.innerHTML;
    resultsDiv.innerHTML = "";
    operation = "%";
});


function operate(operator, num1, num2) {
    if(operator == "+") {
        add(num1, num2);
    }else if(operator == "-") {
        subtract(num1, num2);
    }else if(operator == "*") {
        multiply(num1, num2);
    }else if(operator == "/") {
        divide(num1, num2);
    }else if(operator == "%") {
        modul(num1, num2);
    }
}

equal.addEventListener("click", function() {
    secondNumber = resultsDiv.innerHTML;
    operate(operation, number, secondNumber);
    if(resultsDiv.innerHTML.length > 9) {
        resultsDiv.innerHTML = resultsDiv.innerHTML.slice(0,10);
    }
});

clear.addEventListener("click", function() {
    resultsDiv.innerHTML = "";
});

backspace.addEventListener("click", function() {
    resultsDiv.innerHTML = resultsDiv.innerHTML.slice(0,-1);
});

