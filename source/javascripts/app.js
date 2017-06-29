// ---------------------------------------
//                          + Libraries +
// ---------------------------------------
// Font Awesome
require('font-awesome/css/font-awesome.css');

// SmoothScroll
const smoothScroll = require('sitewide/javascripts/smoothScroll');
smoothScroll();

// ---------------------------------------
//                            + layouts +
// ---------------------------------------
// Header and Footer
const layout = require('layouts/layout');

window.onload = function () {
  layout();
}
