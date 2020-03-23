const url = 'https://api.coincap.io/v2';

async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  return json.data;
}

async function getAssets() {
  return await fetchData(`${url}/assets?limit=20`);
}

async function getAsset(coin) {
  return await fetchData(`${url}/assets/${coin}`);
}

async function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return await fetchData(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
}

async function getMarkets(coin) {
  return await fetchData(`${url}/assets/${coin}/markets?limit=5`);
}

async function getExchange(id) {
  return await fetchData(`${url}/exchanges/${id}`);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
