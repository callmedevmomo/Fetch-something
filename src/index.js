import "./styles.css";

const API_URL = "http://ip-api.com/json/";

const indicator = document.getElementById("jsindicator");
const location = document.getElementById("jslocation");

function getData() {
  fetch(API_URL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const { city, country } = data;

      if (data) {
        indicator.innerHTML = "✅Now I got some data";
      } else {
        indicator.innerHTML = "🤪Error";
      }
      location.innerHTML = `You live in ${city} in ${country}`;
    });
}

function init() {
  setTimeout(getData, 2000);
}

init();
