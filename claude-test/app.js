const messages = [
  "You clicked it!",
  "Again? Nice.",
  "Keep going...",
  "Okay you're committed.",
  "🎉 Achievement unlocked!",
];

let count = 0;
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("msg").textContent = messages[count % messages.length];
  count++;
});
