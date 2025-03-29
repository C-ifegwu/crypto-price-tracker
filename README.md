# Crypto Price Tracker

A practical web application that fetches real-time cryptocurrency prices using the CoinGecko API. This tool is designed for traders and enthusiasts to quickly check current prices for various cryptocurrencies.

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Deployment: Nginx (web server), HAProxy (load balancer)
- API: [CoinGecko API](https://www.coingecko.com/en/api)

## Features
- Real-Time Data: Displays up-to-date cryptocurrency prices.
- Search Functionality: Input any cryptocurrency (e.g., bitcoin) and view its price in USD.
- Error Handling: Provides user-friendly messages for errors or invalid input.
- Custom HTTP Header: Web servers are configured with a custom header (`X-Served-By`) that indicates which server handled the request.
- Load Balanced Deployment: The application is deployed on two web servers with HAProxy distributing traffic.

## Local Setup Instructions
1. Clone the Repository:
   ```bash
   git clone https://github.com/c-ifegwu/crypto-price-tracker.git
   cd crypto-price-tracker
lINK TO LOAD BALANCER: http://getsymphony.tech/   