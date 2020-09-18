var urlParams = new URLSearchParams(window.location.search);
var page = urlParams.get('page');
console.log("page: " + page);

if (page == "checkout") {
  document.getElementById("register-form").action = "thank_you_checkout.html";
} else if (page == "embed") {
  document.getElementById("register-form").action = "thank_you_embed.html";
} else if (page == "redirect") {
  document.getElementById("register-form").action = "thank_you_redirect.html";
} else if (page == "standalone") {
  document.getElementById("register-form").action = "thank_you_standalone.html";
}

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