const quotes = [
  "Believe you can and you're halfway there.",
  "You miss 100% of the shots you don't take.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Do something today that your future self will thank you for."
];

function getQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}
