// Increment function
let counter = document.getElementById("counter");

let cnt = 0;

// Create a function.
export function increment() {
    console.log("Click event!");
    cnt += 1;
    counter.innerHTML = cnt;
    console.log("cnt: " + cnt);
}

window.increment = increment;

// --------------------------------

// Count down function.
const timer = ms => new Promise(res => setTimeout(res, ms));

// Asyncrin function.
export async function countDown() {
    for (let i = 0; i < 10; i++) {
        let node = document.createElement("li");
        node.appendChild(document.createTextNode(i));
        document.getElementById("count-down").appendChild(node);
        console.log(i);
        await timer(1000); // Then the created Promise can be awaited
    }
}

window.countDown = countDown;