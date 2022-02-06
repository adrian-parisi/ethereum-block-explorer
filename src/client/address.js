const { getBlocks, getBalance } = require('./client')

$(document).ready(async function () {
  $("#btn-check-balance").click(async () => {
    const address = $("#address").val();
    if (address) {
      const { balance } = await getBalance(address);
      console.log(balance);
      $("#balance-block").show();
      $("#balance-amount").text(balance);
    }
  });
});
