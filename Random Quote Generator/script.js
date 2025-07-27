const quotes = [
    "Believe in yourself.",
    "Stay consistent and trust the process.",
    "Every expert was once a beginner.",
    "Push yourself, because no one else will.",
    "Do one thing every day that scares you.",
    "Success is not for the lazy.",
    "Your only limit is your mind."
  ];

  const btn = document.getElementById("btn")
  const quote = document.getElementById("quote")
  
btn.addEventListener("click", function(){
  const random = Math.floor(Math.random()* quotes.length)

  quote.textContent = quotes[random];

  


})