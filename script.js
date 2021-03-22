const dotsNum = document.querySelector('#dotsNum');
const PiResult = document.querySelector('#result');
const errorRes = document.querySelector('#errorRes');
const loader = document.querySelector(".lds-dual-ring")
const canvas = document.querySelector('#c1');
const ctx = canvas.getContext('2d');

const numOfDots = 10000000;

let circleHit = 0;

function createDot() {
    for (let i = 0; i < numOfDots; i++) {
        const pointX = Math.random() * 2 - 1;
        const pointY = Math.random() * 2 - 1;
        const condition = Math.sqrt(Math.pow(pointX, 2) + Math.pow(pointY, 2));
        if (condition < 1) {
            circleHit++;
            ctx.fillStyle = 'red';
            ctx.fillRect(pointX * 300 + 301, pointY * 300 + 301, 1, 1);
        } else {
            ctx.fillStyle = 'blue';
            ctx.fillRect(pointX * 300 + 301, pointY * 300 + 301, 1, 1);
        }
    }
}

// let executionTime = 0;
// for (let i = 0; i < 20; i++) {
//     var time = performance.now();
//     createDot();
//     time = performance.now() - time;
//
//     console.log('Время выполнения = ', time);
//     executionTime += time;
// }
// console.log('Итого ' + executionTime / 1000 + ' сек');

function calculatePi() {
    let pi = (4 * circleHit) / numOfDots;
    return pi;
}

function error() {
    let absError = Math.abs((Math.PI - calculatePi()));
    let relError = (absError / Math.PI) * 100;
    return relError.toFixed(6) + '%';
}

let promise = new Promise(function(resolve, reject) {
    loader.style.visibility='visible';
    createDot();
    dotsNum.innerHTML = numOfDots;
    PiResult.innerHTML = calculatePi();
    errorRes.innerHTML = error();

});
promise.then(loader.style.visibility='hidden');






