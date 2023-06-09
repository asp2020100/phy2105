function calculate() {
    const temperatureInput = document.getElementById("temperature");
    const temperature = temperatureInput.value;
    const result = document.getElementById("result");
  
    if (temperature > 0) {
      const h = 6.62607015 * Math.pow(10, -34); // Planck constant
      const c = 299792458; // Speed of light
      const k = 1.38064852 * Math.pow(10, -23); // Boltzmann constant
  
      const shortWavelengthLimit = (h * c) / (temperature * k) * 10 ** 9; // Convert to nm
      const longWavelengthLimit = (h * c) / (temperature * k * 5.5) * 10 ** 9; // Convert to nm
  
      result.innerHTML = `
        <p>Short Wavelength Limit: ${shortWavelengthLimit.toFixed(2)} nm</p>
        <p>Long Wavelength Limit: ${longWavelengthLimit.toFixed(2)} nm</p>
      `;
    } else {
      result.innerHTML = "Please enter a valid temperature.";
    }
  }
  
  document.getElementById("calculate-button").addEventListener("click", calculate);
  document.getElementById("temperature").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      calculate();
    }
  });
  