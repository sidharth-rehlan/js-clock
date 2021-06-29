/**
 * Get Current time
 * @returns
 */
const getCurrentTime = () => {
  let date = new Date();
  let [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  const ampm = getAM_PM(hour);
  hour = hour > 12 ? hour - 12 : hour;
  hour = getDigitWithZero(hour);
  minutes = getDigitWithZero(minutes);
  seconds = getDigitWithZero(seconds);

  return `${hour}:${minutes}:${seconds} ${ampm}`;
};

/**
 * Get digits in 0 format
 * @param {*} digit
 * @returns
 */
const getDigitWithZero = (digit) => {
  return digit < 10 ? `0${digit}` : digit;
};

/**
 * Get AM or PM
 * @param {*} hour
 * @returns
 */
const getAM_PM = (hour) => {
  return hour > 12 ? "PM" : "AM";
};

const clockTag = document.getElementById("clock");

/**
 * Render Clock
 */
const renderClock = () => {
  let currentTime = getCurrentTime();
  clockTag.innerHTML = currentTime;
};

//render click first time
renderClock();

setInterval(() => {
  renderClock();
}, 1000);
