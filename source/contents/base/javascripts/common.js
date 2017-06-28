// Toggle Nav Menu

module.exports = function() {
  function hoge() {
    console.log('hoge');
  }
  var btn = document.getElementById("js-Header_NavMenuIcon");
  if(btn) {
    btn.addEventListener("click", hoge);
  }
};