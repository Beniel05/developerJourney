const p1ScoreDom = document.getElementById("p1Score");
const p2ScoreDom = document.getElementById("p2Score");
let p1ScoreNum = Number(p1ScoreDom.textContent);
let p2ScoreNum = Number(p2ScoreDom.textContent);

const p1Button = document.getElementById("p1Button");
const p2Button = document.getElementById("p2Button");

const targetDom = document.getElementById("target");
let targetNum = Number(targetDom.value);

const reset = document.getElementById("reset");

targetDom.addEventListener('change', () => { targetNum = Number(targetDom.value) });

p1Button.addEventListener("click", () => {
  p1ScoreNum++;
  p1ScoreDom.textContent = p1ScoreNum;

  if (p1ScoreNum >= targetNum) {
    p1ScoreDom.style.color = "green";
    p2ScoreDom.style.color = "red";
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

p2Button.addEventListener("click", () => {
  p2ScoreNum++;
  p2ScoreDom.textContent = p2ScoreNum;

  if (p2ScoreNum >= targetNum) {
    p1ScoreDom.style.color = "red";
    p2ScoreDom.style.color = "green";
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

reset.addEventListener("click", handleReset);
targetDom.addEventListener('change', handleReset);

function handleReset() {
  p1ScoreNum = 0;
  p2ScoreNum = 0;
  
  p1ScoreDom.textContent = 0;
  p2ScoreDom.textContent = 0;
  
  p1ScoreDom.style.color = "";
  p2ScoreDom.style.color = "";
  
  p1Button.disabled = false;
  p2Button.disabled = false;
};