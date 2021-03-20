const numberOfDots = document.querySelector('#numOfDots');
const PiResult = document.querySelector('#result')
const canvas = document.querySelector('#c1');
const ctx = canvas.getContext('2d');

numberOfDots.onchange = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let randomNumber = () => {
        let rand = ((Math.random() < 0.5) ? -1 : 1)*Math.random();
        return rand;
    }

    const arr = [];

    function createArrOfPoints(f) {
        for (let i = 0; i < f; i++) {
            const point = [];
            const pointX = randomNumber();
            const pointY = randomNumber();
            point.push(pointX, pointY);
            arr.push(point);
        }
    }
    const numOfDots = this.value;
    createArrOfPoints(numOfDots);

    let circleHit = 0;

    function checkHit() {
        for (let i = 0; i < arr.length; i++) {
            if (Math.sqrt(Math.pow(arr[i][0],2) + Math.pow(arr[i][1],2)) <= 1 ) {
                circleHit++;
                ctx.fillStyle='red';
                ctx.fillRect(arr[i][0]*200+200, arr[i][1]*200+200, 1, 1);
            } else {
                ctx.fillStyle='blue';
                ctx.fillRect(arr[i][0]*200+200, arr[i][1]*200+200, 1, 1);
            }
        }
    }
    checkHit();

    function calculatePi() {
        let pi = (4 * circleHit)/numOfDots;
        return pi;
    }
    PiResult.innerHTML = calculatePi();
}

