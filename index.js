const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const body = document.querySelector("body");
let randomColorInterval;

function setRandomColor() {
  randomColor = colors[randomIntegerFromInterval(0, 5)];
  body.style.backgroundColor = randomColor;
}

startBtn.addEventListener('click', ()=>{
  randomColorInterval = setInterval(setRandomColor, 1000);
  startBtn.setAttribute("disabled", "true");
});

stopBtn.addEventListener('click', ()=>{
  clearInterval(randomColorInterval);
  startBtn.removeAttribute("disabled");
});