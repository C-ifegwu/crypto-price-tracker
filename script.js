// This script fetches real-time cryptocurrency price data from the CoinGecko API

async function fetchCryptoPrice() {
  const cryptoInput = document.getElementById('cryptoInput');
  const resultDiv = document.getElementById('result');
  const cryptoName = cryptoInput.value.trim().toLowerCase();

  if (!cryptoName) {
      resultDiv.innerHTML = "<p class='error'>Please enter a cryptocurrency name!</p>";
      return;
  }

  try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=usd`);
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      const data = await response.json();

      if (data[cryptoName] && data[cryptoName].usd !== undefined) {
          resultDiv.innerHTML = `<p class='success'>Current Price of <strong>${cryptoName.toUpperCase()}</strong>: $${data[cryptoName].usd}</p>`;
      } else {
          resultDiv.innerHTML = "<p class='error'>Cryptocurrency not found. Try another name!</p>";
      }
  } catch (error) {
      resultDiv.innerHTML = "<p class='error'>Error fetching data. Please try again later.</p>";
      console.error("Error fetching price:", error);
  }
}

document.getElementById('fetchButton').addEventListener('click', fetchCryptoPrice);