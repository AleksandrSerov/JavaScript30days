const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const BASIC_ROTATE = 90;

const setDegree = (elem, degree) => {
  elem.style.transform = `rotate(${degree}deg)`;
};

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + BASIC_ROTATE;
  setDegree(secondHand, secondsDegrees);

  const minutes = now.getMinutes();
  const minutesDegrees =
    (minutes / 60) * 360 + (seconds / 60) * 6 + BASIC_ROTATE;
  setDegree(minuteHand, minutesDegrees);

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + BASIC_ROTATE;
  setDegree(hourHand, hoursDegrees);
};

setInterval(setDate, 1000);

setDate();
