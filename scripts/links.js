const linksURL = "https://pdmostert.github.io/wdd230/data/links.json";
// const linksURL = "data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      //   console.log(data);
      displayLinks(data.lessons);
    } else {
      throw Error(await response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayLinks(weeks) {
  weeks.forEach((week) => {
    let li = document.createElement("li");
    li.innerHTML = `Week ${week.lesson}: `;
    let count = 0;
    week.links.forEach((link) => {
      if (count > 0) {
        let span = document.createElement("span");
        span.innerHTML = ` | `;
        li.appendChild(span);
      }
      let a = document.createElement("a");
      a.setAttribute("href", link.url);
      a.setAttribute("target", "_blank");
      a.innerHTML = link.title;
      li.appendChild(a);
      count++;
    });
    document.querySelector("#links").appendChild(li);
  });
}

getLinks();