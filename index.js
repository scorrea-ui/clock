
const select = document.querySelector.bind(document);
const selectAll = document.querySelectorAll.bind(document);


const secondHand = select('.sec-hand');
const minHand = select('.min-hand');
const hourHand = select('.hour-hand');

function moveHands () {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds/60) * 360) + 90;
    const minDegrees = (minutes / 60) * 360 + (seconds/60)  * 6 + 90;
    const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minHand.style.transform = `rotate(${minDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    secondHand.style.transition = secondsDegrees === 90 ? 'none' : ''
}

setInterval(moveHands, 1000)



