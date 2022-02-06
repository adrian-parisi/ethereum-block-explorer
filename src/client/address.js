const { getAddressDetails } = require('./client')

$(document).ready(async function () {
  $("#btn-check-balance").click(async () => {
    const address = $("#address").val();
    if (address) {
      const { balance, isEOA } = await getAddressDetails(address);
      console.log(balance);
      $("#balance-block").show();
      $("#balance-amount").text(balance + " ETH");
      $("#is-eoa").text(isEOA);
    }
  });
});
