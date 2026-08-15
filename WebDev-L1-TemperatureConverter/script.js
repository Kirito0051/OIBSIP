const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertButton");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

convertButton.addEventListener("click", () => {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  errorMessage.textContent = "";

  if (temperatureInput.value.trim() === "") {
    errorMessage.textContent = "Please enter a temperature.";
    return;
  }
  if (unit === "celsius" && temperature < -273.15) {
    errorMessage.textContent = "Celsius cannot be below -273.15°C.";
    return;
  }

  if (unit === "fahrenheit" && temperature < -459.67) {
    errorMessage.textContent = "Fahrenheit cannot be below -459.67°F.";
    return;
  }

  if (unit === "kelvin" && temperature < 0) {
    errorMessage.textContent = "Kelvin cannot be below 0 K.";
    return;
  }

  let celsius;
  let fahrenheit;
  let kelvin;

  if (unit === "celsius") {
    celsius = temperature;
    fahrenheit = (temperature * 9) / 5 + 32;
    kelvin = temperature + 273.15;
  }

  if (unit === "fahrenheit") {
    celsius = ((temperature - 32) * 5) / 9;
    fahrenheit = temperature;
    kelvin = celsius + 273.15;
  }

  if (unit === "kelvin") {
    kelvin = temperature;
    celsius = temperature - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  }

  celsiusResult.textContent = celsius.toFixed(2);
  fahrenheitResult.textContent = fahrenheit.toFixed(2);
  kelvinResult.textContent = kelvin.toFixed(2);
});

temperatureInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    convertButton.click();
  }
});
