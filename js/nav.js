var nav_menu = '<div class="row align-items-center justify-content-between d-flex">' +
'<div id="logo">' +
'<a href="index.html"><img src="img/flywire-logo-circle.jpg" height="30" width="30" alt="" title="" /> Flywire College</a>' +
'</div>' +
'<nav id="nav-menu-container">' +
'<ul class="nav-menu">' +
'<li><a href="index.html">Home</a></li>' +
'<li class="menu-has-children"><a href="">Application</a>' +
'<ul>' +
'<li><a href="form.html?page=standalone">Standalone</a></li>' +
'<li><a href="form.html?page=redirect">Redirect</a></li>' +
'<li><a href="form.html?page=embed">Embed</a></li>' +
'<li><a href="form.html?page=checkout">Checkout</a></li>' +
'</ul>' +
'</li>' +
'<li class="menu-has-children"><a href="">Invoices</a>' +
'<ul>' +
'<li><a href="invoice_standalone.html">Standalone</a></li>' +
'<li><a href="invoice_redirect.html">Redirect</a></li>' +
'<li><a href="invoice_embed.html">Embed</a></li>' +
'<li><a href="invoice_checkout.html">Checkout</a></li>' +
'</ul>' +
'</li>' +
'<li class="menu-has-children"><a href="">Reconciliation</a>' +
'<ul>' +
'<li><a href="callbacks.html">Callbacks (Real-time)</a></li>' +
'<li><a href="flywire_disbursement_file_sample.csv">Disbursement File (Daily)</a></li>' +
'</ul>' +
'</li>' +
'</ul>' +
'</nav>' +
'</div>';

document.getElementById("nav-menu").innerHTML = nav_menu;