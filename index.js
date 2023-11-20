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

  let distance = document.createElement("p");
  distance.textContent = `Distance from earth: ${alienPlanets[i].distanceFromEarth}`;

  let atmosphere = document.createElement("p");
  atmosphere.textContent = `Atmosphere: ${alienPlanets[i].atmosphere}`;

  let life = document.createElement("p");
  life.textContent = `Does it have life: ${alienPlanets[i].hasLife}`;

  card.addEventListener("mouseover", function () {
    card.style.backgroundColor = "gray";

    card.replaceChildren();
    card.appendChild(distance);
    card.appendChild(atmosphere);
    card.appendChild(life);
  });

  card.addEventListener("mouseleave", function () {
    card.replaceChildren();

    card.style.backgroundColor = "white";
    card.appendChild(name);
    card.appendChild(emoji);
  });
}
