const ethers = require('ethers');
const { BLOCKS_PER_PAGE } = require('./config');
require('dotenv').config();

const url = process.env.NODE_URL;
const provider = new ethers.providers.JsonRpcProvider(url);

class BlockchainClient {

  static async getLatestBlocks() {
    const latestBlockNum = await provider.getBlockNumber();
    console.log(`Latest block: ${latestBlockNum}`);

    const from = latestBlockNum - BLOCKS_PER_PAGE
    const to = latestBlockNum;

    console.log(`Fetching blocks from ${from} to ${to}`);

    const blockPromises = [];
    for (let i = from; i <= to; i++) {
      const blockPromise = provider.getBlock(i);
      blockPromises.push(blockPromise);
    }
    const blocks = await Promise.all(blockPromises);

    // Sort blocks by block number.
    blocks.sort((b1, b2) => {
      return b2.number - b1.number;
    });
    return blocks
  }

  static async getBalance(address) {
    console.log(`Checking balance from address ${address}`);
    const balanceBigInt = await provider.getBalance(address);
    const balance = ethers.utils.formatEther(balanceBigInt);
    console.log(`Balance from address ${address} is ${balance}`);
    return balance;
  }

}

module.exports = BlockchainClient;