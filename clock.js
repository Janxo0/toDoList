const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());
    
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function addZero(time) {
    return (`${time < 10 ? `0${time}` : time}`);
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();