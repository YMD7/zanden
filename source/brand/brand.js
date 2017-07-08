module.exports = function() {
  
  // ---------------------------------------
  //                              + brand +
  // ---------------------------------------
  // toggle awards list
  toggleAwardList = (e) => {
    const btn    = u.u(e.target),
          target = u.u(btn.parent().parent('.brand-Awards_ListItem').first());
    if(target.hasClass('hidden')) {
      // hidden
      const promise = new Promise((resolve) => {
        target.removeClass('hidden').addClass('open, show');
        setTimeout(() => {
          resolve("Opened");
        }, 500)
      });
      promise.then(() => {
        target.removeClass('open')
      });

    } else {
      // show
      const promise = new Promise((resolve) => {
        target.removeClass('show').addClass('close');
        setTimeout(() => {
          resolve("Closed");
        }, 500)
      });
      promise.then(() => {
        target.removeClass('close').addClass('hidden');
      });
    }
  };
  const toggleTrigger = u.u('.brand-Awards_ClickArea');
  toggleTrigger.on('click', toggleAwardList);

};
