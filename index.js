import { alienPlanets } from "./alienPlanets.js";

let cardContainer = document.querySelector("#card-container");

for (let i = 0; i < alienPlanets.length; i++) {
  let card = document.createElement("div");
  card.className = "card";
  cardContainer.appendChild(card);

  let name = document.createElement("h4");
  name.textContent = `${alienPlanets[i].name}`;
  card.appendChild(name);

  let emoji = document.createElement("p");
  emoji.textContent = `${alienPlanets[i].emoji}`;
  card.appendChild(emoji);
}
