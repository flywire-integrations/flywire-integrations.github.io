var footer = '<div class="container">' +
  '<div class="row">' +
  '<div class="col-lg-5 col-md-6 col-sm-6">' +
  '<div class="single-footer-widget">' +
  '<h4>About Me</h4>' +
  '<p>' +
  'We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.' +
  '</p>' +
  '<p class="footer-text">' +
  '</p>' +
  '</div>' +
  '</div>' +
  '<div class="col-lg-5 col-md-6 col-sm-6">' +
  '<div class="single-footer-widget">' +
  '<h4>Newsletter</h4>' +
  '<p>Stay updated with our latest trends</p>' +
  '<div class="">' +
  '<form action="" method="get" name="newsletter_form">' +
  '<div class="input-group">' +
  '<input type="text" class="form-control" id="newsletter_input" name="portal-code" placeholder="Enter Demo Portal Code" required="" type="email">' +
  '<div class="input-group-btn">' +
  '<button class="btn btn-default" type="submit">' +
  '<span class="lnr lnr-arrow-right"></span>' +
  '</button>' +
  '</div>' +
  '<div class="info"></div>' +
  '</div>' +
  '</form>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '<div class="col-lg-2 col-md-6 col-sm-6 social-widget">' +
  '<div class="single-footer-widget">' +
  '<h4>Follow Me</h4>' +
  '<p>Let us be social</p>' +
  '<div class="footer-social d-flex align-items-center">' +
  '<a href="#"><i class="fa fa-facebook"></i></a>' +
  '<a href="#"><i class="fa fa-twitter"></i></a>' +
  '<a href="#"><i class="fa fa-dribbble"></i></a>' +
  '<a href="#"><i class="fa fa-behance"></i></a>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</footer>';

document.getElementById("footer").innerHTML = footer;

var urlParams = new URLSearchParams(window.location.search);
var page = urlParams.get('page');
console.log("page: " + page);

if (page == "embed") {
  var input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'page'
  input.value = 'embed';
  document.getElementsByName("newsletter_form")[0].appendChild(input);
} else if (page == "redirect") {
  var input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'page'
  input.value = 'redirect';
  document.getElementsByName("newsletter_form")[0].appendChild(input);
} else if (page == "standalone") {
  var input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'page'
  input.value = 'standalone';
  document.getElementsByName("newsletter_form")[0].appendChild(input);
}