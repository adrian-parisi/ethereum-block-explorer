const { getAddressDetails } = require('./client')

$(document).ready(async function () {
  $("#btn-check-balance").click(async () => {
    const address = $("#address").val();
    if (address) {
      const { balance, isEOA } = await getAddressDetails(address);
      $("#balance-block").show();
      $("#balance-amount").text(Number.parseFloat(balance).toFixed(4) + " ETH");
      $("#is-eoa").text(isEOA);
    }
  });
});
