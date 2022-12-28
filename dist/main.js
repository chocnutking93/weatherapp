let weather = {
  apiKey: "292ea41f01175c53121c5f57c364ba0b",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".location").innerText = name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temperature").innerText = temp + "°F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind " + speed + "mph";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar-input").value)
  }
}

document.querySelector('.search-bar').addEventListener('click', function () {
    weather.search();
})

document.querySelector('.search-bar').addEventListener('keyup', function (e) {
    if (e.key == "Enter") {
        weather.search();
    }
} )

weather.fetchWeather("San Francisco")
