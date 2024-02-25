const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    // console.table(data);
    displayProphets(data.prophets);
  }
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    p1.textContent = `Date of Birth: ${prophet.birthdate}`;
    p2.textContent = `Place of Birth: ${prophet.birthplace}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "240");
    portrait.setAttribute("height", "313");

    card.appendChild(fullName);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

getProphetData();