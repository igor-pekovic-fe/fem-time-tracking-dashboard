import * as data from "./data.js";

const cards = document.querySelectorAll(".card");

const dailyBtn = document.querySelector(".timeframe-daily");
const weeklyBtn = document.querySelector(".timeframe-weekly");
const monthlyBtn = document.querySelector(".timeframe-monthly");

dailyBtn.addEventListener("click", () => renderTimeframe("daily"));
weeklyBtn.addEventListener("click", () => renderTimeframe("weekly"));
monthlyBtn.addEventListener("click", () => renderTimeframe("monthly"));

function resetCard() {
  cards.forEach((card) => (card.innerHTML = ""));
}

function renderTimeframe(timeframe) {
  resetCard();
  data.default.forEach((item, index) => {
    const {
      title,
      timeframes: {
        [timeframe]: { current, previous },
      },
    } = item;
    const card = cards[index];
    card.insertAdjacentHTML(
      "afterbegin",
      `
        <img src="./images/icon-${title
          .toLowerCase()
          .replaceAll(" ", "-")}.svg" alt="play icon" class="card-icon" />
          <h3 class="card-title">${title}</h3>
          <p class="card-play-current current">${current}</p>
          <p class="card-play-previous previous">${previous}</p>
          `
    );
  });
}

renderTimeframe("daily");
