function updateAmount(element) {
  if (element == "computer") {
    document.getElementById("amount").value = "$1,000";
  } else if (element == "marketing") {
    document.getElementById("amount").value = "$2,000";
  } else if (element == "mba") {
    document.getElementById("amount").value = "$3,000";
  } else if (element == "product") {
    document.getElementById("amount").value = "$4,000";
  } else if (element == "uiux") {
    document.getElementById("amount").value = "$5,000";
  }
}

function generatePaymentID() {
  document.getElementById("paymentID").value = "FC-" + Math.floor((Math.random() * 100000) + 1);
}