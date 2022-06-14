import { lodJsonFile } from "./fileLoader.js"
import { increment, countDown } from "./utils.js"

// Variables
// Variables declared by var keyword are scoped to the immediate function body (hence the function scope).
var message_1 = "Hello";

// Let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).
let message_2 = "world";

// Constant variables can't be modified.
// This is also an example of concatenation.
const message_complete = message_1 + " " + message_2 + "!";

// First line of code in JavaScript.
console.log("Message: " + message_complete);

// Acces html element.
document.getElementById("hello").innerHTML = message_complete;

function init() {
    lodJsonFile(function (response) {;
        var json = JSON.parse(response);
        const app = document.querySelector('#load-json-file');
        app.innerHTML = '<pre>' + JSON.stringify(json, null, 4) + '</pre>';
    });
}

init();