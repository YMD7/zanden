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
      u.u('.st-Header_NavMenuSVG').attr('src', '/contents/base/images/icon-Times.svg');
      
      container.removeClass('hidden, fadeOut').addClass('fadeIn');
      
    } else {
      // display
      u.u('body, .st-Header_NavMenuIcon').attr('style', '');
      u.u('.st-Header_NavMenuSVG').attr('src', '/contents/base/images/icon-HamburgerMenu.svg');

      const promise = new Promise((resolve) => {
        container.removeClass('fadeIn').addClass('fadeOut');
        setTimeout(() => {
          resolve("OK");
        }, 500)
      })
      promise.then(() => {
        container.addClass('hidden');
      })
    }
  }
  u.u('.st-Header_NavMenuIcon, .st-Header_NavMenuCloseButton').on('click', function(e){
    e.preventDefault();
    toggleMenu();
  });

};
