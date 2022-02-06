const Blockchain = require('./blockchain');
const moment = require('moment');


$(document).ready(async function () {
  const blocks = await Blockchain.getLatestBlocks();
  console.log(blocks);
  displayDashboard(blocks);
});

function displayDashboard(blocks) {
  window.blocks = blocks;
  const tableBody = $("#blocks-table-body");

  const addColumn = ((tr, value) => {
    tr.appendChild(document.createElement('td')).append(value);
  });

  blocks.forEach(block => {
    const tr = document.createElement('tr');

    // Populate block number
    const blockButton = document.createElement('button');
    blockButton.classList.add("btn-success");
    blockButton.innerHTML = block.number;
    addColumn(tr, blockButton);
    addColumn(tr, moment.unix(block.timestamp).fromNow());
    addColumn(tr, block.transactions.length);
    addColumn(tr, block.miner);
    tableBody.append(tr);
  });

}
