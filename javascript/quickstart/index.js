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

// Counter application
let counter = document.getElementById("counter");

let cnt = 0;

// Create a function.
function increment() {
    console.log("Click event!");
    cnt += 1;
    counter.innerHTML = cnt;
    console.log("cnt: " + cnt);
}

// Load json filse over HTTP request.
function lodJsonFile(callback) {
    var xobject = new XMLHttpRequest();

    xobject.overrideMimeType("application/json");
    xobject.open('GET', './data.json', true);

    xobject.onreadystatechange = function () {
        if (xobject.readyState === 4 && xobject.status === 200) {
            callback(xobject.responseText);
        }
    };

    xobject.send(null);
}

function init() {
    lodJsonFile(function (response) {
        console.log('response =', response);
        var json = JSON.parse(response);
        console.log('your local JSON =', JSON.stringify(json, null, 4));
        const app = document.querySelector('#load-json-file');
        app.innerHTML = '<pre>' + JSON.stringify(json, null, 4) + '</pre>';
    });
}

init();

// Count down.
const timer = ms => new Promise(res => setTimeout(res, ms));

// Asyncrin function.
async function countDown() {
    for (let i = 0; i < 10; i++) {
        let node = document.createElement("li");
        node.appendChild(document.createTextNode(i));
        document.getElementById("count-down").appendChild(node);
        console.log(i);
        await timer(1000); // Then the created Promise can be awaited
    }
}