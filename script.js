let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};
const bitcoin = document.getElementById("bitcoin");
const dogecoin = document.getElementById("dogecoin");
const ethereum = document.getElementById("ethereum");
async function getAPI(settings) {
  const respose = await fetch(settings.url, {
    method: settings.method,
    headers: settings.headers,
  });
  const data = await respose.json();
  bitcoin.innerHTML = data.bitcoin.usd;
  ethereum.innerHTML = data.ethereum.usd;
  dogecoin.innerHTML = data.dogecoin.usd;
}
getAPI(settings);
