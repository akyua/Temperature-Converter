// Forecast today in kelvin saved in the a variable constant
const kelvin = 283;
// Forecast today converts to celsius
const celsius = kelvin - 273;
// Forecast today converts to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Math.floor retire the decimal numbers
fahrenheit = Math.floor(fahrenheit);
// Scale Newton
let newton = celsius * (33/100);
// Math.floor retire the decimal numbers
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
