const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

function celToFar(){
    let output = ( parseFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value = output.toFixed(2);
}

function farToCel(){
    let output = ( parseFloat(fahrenheit.value) - 32 ) / 1.8;
    celsius.value = output.toFixed(2);
}

/* // Forecast today in kelvin saved in the a variable constant
const kelvin = 283;
// Forecast today converts to celsius
const celsiust = kelvin - 273;
// Forecast today converts to fahrenheit
let fahrenheitt = celsiust * (9/5) + 32;
// Math.floor retire the decimal numbers
fahrenheitt = Math.floor(fahrenheitt);
// Scale Newton
let newton = celsiust * (33/100);
// Math.floor retire the decimal numbers
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheitt} degrees Fahrenheit.`) */
