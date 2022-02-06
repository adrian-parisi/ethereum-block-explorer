require('dotenv').config();

const server = process.env.SERVER_URL;

async function getBlocks() {
  const request = new Request(`${server}/blocks`, { method: 'GET' });
  return fetch(request).then(response => {
    return response.json();
  });
}

async function getBalance(address) {
  const request = new Request(`${server}/balance/${address}`, { method: 'GET' });
  return fetch(request).then(response => {
    return response.json();
  });
}

module.exports = {
  getBlocks,
  getBalance,
};