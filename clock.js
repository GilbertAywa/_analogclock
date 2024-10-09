const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const digitalEl = document.querySelector('.digital');

/* 
* 60s = 360deg
* 1s => 6deg
* at 1min => 90deg
* at 15min => 180deg
* at 30min => 270deg
* at 45min => 360deg
* at 60min => 90deg
*/

setInterval(() => {
  const now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  secondsEl.style.transform = `rotate(${90+(6*seconds)}deg)`;
  minutesEl.style.transform = `rotate(${90+(6*minutes)}deg)`;
  hoursEl.style.transform = `rotate(${90+((hours+(minutes/60))*30)}deg)`;
  digitalEl.textContent = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}hrs`;
}, 1000);
