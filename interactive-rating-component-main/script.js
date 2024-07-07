const homeContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  homeContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");
});

rateAgain.addEventListener("click", () => {
  homeContainer.style.display = "block";
  thanksContainer.classList.add("hidden");
});

rates.forEach((cold) => {
    cold.addEventListener('click', () => {
        rating.innerHTML = cold.innerHTML
    })
})
