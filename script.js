const articles = document.querySelector("#articles");
const countries = document.querySelector("#countries");
const endpoints = document.querySelector("#endpoints");
let countryCodes = [];
let countryNames = [];

fetch("./countryCodes.json")
  .then((response) => response.json())
  .then((data) => {
    countryCodes = Object.keys(data);
    countryNames = Object.values(data);
  })
.then(() => {
    for (let cn of countryNames) {
      let btn = document.createElement("button");
      btn.textContent = cn;
      countries.appendChild(btn);
      btn.addEventListener("click", () => {
        articles.innerHTML = "";
        loadData(countryCodes[countryNames.indexOf(cn)]);
      });
    }
  });
function loadData(cc) {
  if (!countryCodes.includes(cc)) throw new Error("Invalid country code");

const url = new URL(`https://newsapi.org/v2/top-headlines`);
  url.searchParams.append("country", "us");
  url.searchParams.append("apiKey", "86457d0e650946588b129fb1dfe4164d");
  fetch(url.toString())
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let item of data.articles) {
        let htmlString = `
        <article>
        <hr />
        <h2>${item.title}</h2>
        <h3>${item.author}</h3>
        <img src="${item.urlToImage}" alt="${item.title}">
        <p>${item.description}</p>
        <a href="${item.url}" target="_blank" >Read more</a>
        <hr />
        </article>
        `;
        articles.innerHTML += htmlString;
      }
    });
}
