let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()]; //0-6 days

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()]; //0-11 months

h2.innerHTML = `${day} ${month} ${date}, ${year}  ${hours}:${minutes}`;

function displayWeather(response) {
  console.log(response.data);
  let temp = response.data.main.temp;
  temp = Math.round(temp);
  document.querySelector(
    "#city"
  ).innerHTML = `Currently in ${response.data.name} it is ${temp} ℉`;
}

function search(event) {
  event.preventDefault();
  //let cityElement = document.querySelector("#city");
  //let cityInput = document.querySelector("#city-input");
  //cityElement.innerHTML = `Currently in ${cityInput.value} 91℉`;
  // want to use API for search event, include city name and temp
  let apiKey = "086aa37c369cc91063726cf6d82e0d6b";
  let city = document.querySelector("#city-input-field").value;
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}
let formElement = document.querySelector("#city-form");
formElement.addEventListener("submit", search);
