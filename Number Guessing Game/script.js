const guess = Math.floor(Math.random() * 100) + 1;
const Para = document.getElementById("message");
const input = document.getElementById("guessInput");
const btn = document.getElementById("guessBtn");

btn.addEventListener("click", function () {
  const userguees = Number(input.value);

  if (userguees === guess) {
      Para.textContent = "Finally You Got it :)";
} else if (userguees < guess) {
    Para.textContent = "It To Low Try Again :(";
  } else {
    Para.textContent = "It To High Try Again :(";
  }

  input.value = "";
});
