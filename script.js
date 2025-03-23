// This script fetches real-time cryptocurrency price data from the CoinGecko API

async function fetchCryptoPrice() {
    const cryptoInput = document.getElementById('cryptoInput');
    const resultDiv = document.getElementById('result');
    const cryptoName = cryptoInput.value.trim().toLowerCase();
  
    if (!cryptoName) {
      resultDiv.innerHTML = "Please enter a cryptocurrency name!";
      return;
    }
  
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=usd`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
  
      if (data[cryptoName] && data[cryptoName].usd !== undefined) {
        resultDiv.innerHTML = `Current Price of ${cryptoName.toUpperCase()}: $${data[cryptoName].usd}`;
      } else {
        resultDiv.innerHTML = "Cryptocurrency not found. Try another name!";
      }
    } catch (error) {
      resultDiv.innerHTML = "Error fetching data. Please try again later.";
      console.error("Error fetching price:", error);
    }
  }
  
  document.getElementById('fetchButton').addEventListener('click', fetchCryptoPrice);  