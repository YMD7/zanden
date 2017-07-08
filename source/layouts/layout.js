module.exports = function() {
  
  // ---------------------------------------
  //                           + Nav Menu +
  // ---------------------------------------

  // Toggle Nav Container

  const toggleMenu = function() {
    console.log('click');
    const container = u.u('.st-Header_NavContaier'),
          menuIcon  = u.u('.st-Header_NavMenuSVG'),
          iconSrc   = menuIcon.attr('src'),
          hamburger = "icon-HamburgerMenu",
          times     = "icon-Times";
    if (container.hasClass('hidden')) {
      // hidden
      u.u('body').attr('style', 'position: fixed;');
      u.u('.st-Header_NavMenuIcon').attr('style', 'position: static;');

      menuIcon.attr('src', iconSrc.replace(hamburger, times));

      container.removeClass('hidden, fadeOut').addClass('fadeIn');
      
    } else {
      // display
      u.u('body, .st-Header_NavMenuIcon').attr('style', '');
      u.u('.st-Header_NavMenuSVG').attr('src', '/contents/base/images/icon-HamburgerMenu.svg');

      const promise = new Promise((resolve) => {
        container.removeClass('fadeIn').addClass('fadeOut');
        menuIcon.attr('src', iconSrc.replace(times, hamburger));
        setTimeout(() => {
          resolve("OK");
        }, 500)
      });
      promise.then(() => {
        container.addClass('hidden');
      });
    }
  }
  u.u('.st-Header_NavMenuIcon, .st-Header_NavMenuCloseButton').on('click', function(e){
    e.preventDefault();
    toggleMenu();
  });

};
