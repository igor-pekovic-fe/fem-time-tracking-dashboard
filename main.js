import * as data from "./data.js";

const cards = document.querySelectorAll(".card__content");

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

    const timeframeStrings = {
      daily: "Yesterday",
      weekly: "Last week",
      monthly: "Last month",
    };

    const timeframeString = timeframeStrings[timeframe];

    const card = cards[index];
    card.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card__container>
        <div class="card__title-container flex">
            <h3 class="card__title">${title}</h3>
            <img class="icon-ellipsis" src="./images/icon-ellipsis.svg" />  
        </div>
            <p class="card__timeframe-current">${current}${
        current == 1 ? "hr" : "hrs"
      }</p>
            <p class="card__timeframe-previous">${timeframeString} - ${previous}${
        previous == 1 ? "hr" : "hrs"
      }</p>
      </div>
          `
    );
  });
}

renderTimeframe("daily");
