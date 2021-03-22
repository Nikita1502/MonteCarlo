const dotsNum = document.querySelector('#dotsNum');
const PiResult = document.querySelector('#result');
const errorRes = document.querySelector('#errorRes');
const canvas = document.querySelector('#c1');
const ctx = canvas.getContext('2d');

const numOfDots = 1000000;

let circleHit = 0;

function createDot() {
    for (let i = 0; i < numOfDots; i++) {
        const pointX = Math.random() * 2 - 1;
        const pointY = Math.random() * 2 - 1;
        if (Math.sqrt(Math.pow(pointX, 2) + Math.pow(pointY, 2)) <= 1) {
            circleHit++;
            ctx.fillStyle = 'red';
            ctx.fillRect(pointX * 300 + 301, pointY * 300 + 301, 1, 1);
        } else {
            ctx.fillStyle = 'blue';
            ctx.fillRect(pointX * 300 + 301, pointY * 300 + 301, 1, 1);
        }
    }
}

createDot();

function calculatePi() {
    let pi = (4 * circleHit) / numOfDots;
    return pi;
}
function error() {
    let absError = Math.abs((3.1415926535897932 - calculatePi()));
    let relError = (absError/3.1415926535897932)*100;
    return relError.toFixed(6) + '%';
}
dotsNum.innerHTML = numOfDots;
PiResult.innerHTML = calculatePi();
errorRes.innerHTML = error();


