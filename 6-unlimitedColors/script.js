const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const heading = document.querySelector('h1');

let backgroundIntervalId;
let headingIntervalId;

const startLoop = function () {
    if (!backgroundIntervalId) {
        backgroundIntervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
        }, 2000)
    }
}

const startHeadingLoop = function () {
    if (!headingIntervalId) {
        headingIntervalId = setInterval(() => {
            heading.style.color = randomColor()
        }, 2000)
    }
}


const stopLoop = function(){
    clearInterval(backgroundIntervalId)
    backgroundIntervalId = null;
}

const stopHeadingLoop = function(){
    clearInterval(headingIntervalId)
    headingIntervalId = null;
}

start.addEventListener('click', startLoop)
start.addEventListener('click', startHeadingLoop)
stop.addEventListener('click', stopLoop)
stop.addEventListener('click', stopHeadingLoop)