const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const BlockchainClient = require('./BlockchainClient');

// localhost can have cross origin errors
// depending on the browser you use!
app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send("pong");
});

app.get('/blocks', async (req, res) => {
  const blocks = await BlockchainClient.getLatestBlocks();
  res.send({ blocks });
});

app.get('/address/:address', async (req, res) => {
  let { address } = req.params;
  let balance = 0.0;
  try {
    balance = await BlockchainClient.getBalance(address);
    isEOA = await BlockchainClient.isEOA(address);
  } catch {
    console.log(`Failed to retrieve details from address ${address}`);
  }
  res.send({ balance, isEOA });

});


app.listen(PORT, () => {
  console.log(`Blockchain explorer server listening on port: ${PORT}`)
})
