//CALCULADORA

//Definicion variables
let runningTotal = 0;
let buffer = 0;
let previousOperator;
var borrar = "←";
var resta = "−";
var multiplicacion = "×";
var division = "÷";
var suma = "+";

const screen = document.querySelector(".screen");

//Funciones operaciones y captura de datos
function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }

  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case `${borrar}`:
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case `${suma}`:
    case `${resta}`:
    case `${multiplicacion}`:
    case `${division}`:
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = symbol;
  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "−") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

//Ejecucion de funciones
init();

//Theme Switch
const switchTheme = document.getElementById("Switch");
switchTheme.addEventListener("click", function () {   
    if (switchTheme.checked) {
        var bodyTag = document.getElementsByClassName("bodyTagDay");
        for (var i = 0; i<bodyTag.length; i++) {
            bodyTag[i].classList.toggle("bodyTagDark");
            bodyTag[i].classList.remove("bodyTagDay");
        }
        var wrapper = document.getElementsByClassName("wrapperDay");
        for (var i = 0; i<wrapper.length; i++) {
            wrapper[i].classList.toggle("wrapperDark");
            wrapper[i].classList.remove("wrapperDay");
        }
        var screen = document.getElementsByClassName("screenDay");
        for (var i = 0; i<screen.length; i++) {
            screen[i].classList.toggle("screenDark");
            screen[i].classList.remove("screenDay");
        }
        var calc_button = document.getElementsByClassName("calc-buttonDay");
        for (var i = 0; i<calc_button.length; i = i ** 2) {
            calc_button[i].classList.toggle("calc-buttonDark");
            calc_button[i].classList.remove("calc-buttonDay");
        }
    } else {
        var bodyTag = document.getElementsByClassName("bodyTagDark");
        for (var i = 0; i<bodyTag.length; i++) {
            bodyTag[i].classList.toggle("bodyTagDay");
            bodyTag[i].classList.remove("bodyTagDark");
        }
        var wrapper = document.getElementsByClassName("wrapperDark");
        for (var i = 0; i<wrapper.length; i++) {
            wrapper[i].classList.toggle("wrapperDay");
            wrapper[i].classList.remove("wrapperDark");
        }
        var screen = document.getElementsByClassName("screenDark");
        for (var i = 0; i<screen.length; i++) {
            screen[i].classList.toggle("screenDay");
            screen[i].classList.remove("screenDark");
        }
        var calc_button = document.getElementsByClassName("calc-buttonDark");
        for (var i = 0; i<calc_button.length; i = i ** 2) {
            calc_button[i].classList.toggle("calc-buttonDay");
            calc_button[i].classList.remove("calc-buttonDark");
        }
    }
});