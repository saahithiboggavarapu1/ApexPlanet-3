async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "ee23388760afc5e26558afa598763cab"; // ✅ Your actual API key

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("city").innerText = data.name;
      document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°C`;
      document.getElementById("desc").innerText = data.weather[0].description;
      document.getElementById("humidity").innerText = data.main.humidity;
      document.getElementById("wind").innerText = data.wind.speed;
    } else {
      alert("City not found. Please try a valid city name.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Unable to fetch weather data. Please check your internet or API key.");
  }
}