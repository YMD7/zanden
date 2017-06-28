module.exports = function() {
  
  // ---------------------------------------
  //                           + Nav Menu +
  // ---------------------------------------
  
  // Toggle Nav Container

  const toggleMenu = function() {
    const container = u.u('.st-Header_NavContaier');
    if (container.hasClass('hidden')) {
      // hidden
      u.u('body').attr('style', 'position: fixed;');
      u.u('.st-Header_NavMenuIcon').attr('style', 'position: static;');
      fade.in(container.first(), 500);
      container.toggleClass('hidden');
      u.u('.st-Header_NavMenuSVG').attr('src', '/contents/base/images/icon-Times.svg');
    } else {
      // display
      u.u('body, .st-Header_NavMenuIcon').attr('style', '');
      fade.out(container.first(), 500);
      container.toggleClass('hidden');
      u.u('.st-Header_NavMenuSVG').attr('src', '/contents/base/images/icon-HamburgerMenu.svg');
    }
  }
  u.u('.st-Header_NavMenuIcon, .st-Header_NavMenuCloseButton').on('click', function(e){
    e.preventDefault();
    toggleMenu();
  });

};
