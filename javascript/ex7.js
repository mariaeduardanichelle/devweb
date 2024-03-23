function fahrenheitParaCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

const temperaturaFahrenheit = 68;
const temperaturaCelsius = fahrenheitParaCelsius(temperaturaFahrenheit);
alert(`A temperatura ${temperaturaFahrenheit.toFixed(2)}°F em Celsius é: ${temperaturaCelsius.toFixed(2)}°C`);