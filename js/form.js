var urlParams = new URLSearchParams(window.location.search);
var page = urlParams.get('page');
console.log("page: " + page);

if (page == "embed") {
  document.getElementById("register_form").action = "thank_you_embed.html";
  if (urlParams.get('portal-code')) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'portal-code';
    input.value = urlParams.get('portal-code');
    document.getElementsByName("register_form")[0].appendChild(input);
  }
} else if (page == "redirect") {
  document.getElementById("register_form").action = "thank_you_redirect.html";
  document.getElementById("newsletter_input").name = "payment-destination";
  document.getElementById("newsletter_input").placeholder = "Enter Subdomain Name";
  if (urlParams.get('payment-destination')) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'payment-destination'
    input.value = urlParams.get('payment-destination');
    document.getElementsByName("register_form")[0].appendChild(input);
  }
} else if (page == "standalone") {
  document.getElementById("register_form").action = "thank_you_standalone.html";
  document.getElementById("newsletter_input").name = "payment-destination";
  document.getElementById("newsletter_input").placeholder = "Enter Subdomain Name";
  if (urlParams.get('payment-destination')) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'payment-destination'
    input.value = urlParams.get('payment-destination');
    document.getElementsByName("register_form")[0].appendChild(input);
  }
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

function handleChange(checkbox) {
  if (checkbox.checked == true) {
    document.getElementById("first_name").value = student_first_name;
    document.getElementById("last_name").value = student_last_name;
    document.getElementById("email").value = student_email;
    document.getElementById("telephone").value = sender_phone;
    document.getElementById("address").value = sender_address1;
    document.getElementById("city").value = "Fly City";
    document.getElementById("state").value = "Fly State";

  }
}