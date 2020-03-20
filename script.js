const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    const minutuesDeg = ((minutes/60)*360)+((seconds/60)*6)+90;
    minHand.style.transform = `rotate(${minutuesDeg}deg)`;

    const hour = now.getHours();
    const hrDeg = ((hour/12)*360)+((minutes/60)*30)+90;
    hrHand.style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(setDate, 1000);

setDate();