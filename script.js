


const display = document.getElementById("display");

function appendToDesplay(input) {
    display.value += input;
}

function clearDesplay() {
    display.value = '';
}

function calculate() {
    display.value = eval(display.value);
}