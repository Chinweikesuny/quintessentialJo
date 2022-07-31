
$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:2,
      itemsDesktop:[1000,2],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768,1],
      pagination:true,
      autoPlay:false
  });
});


//Image Lazy Load 

document.addEventListener("DOMContentLoaded", function() {
  let lazyloadImages = document.querySelectorAll("img.lazy-load");
  let lazyloadThrottleTimeout;

  function lazyload() {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(function() {
      let scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function(img) {
        if(img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if(lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

//num=prompt("Enter some Value"); input method call



//Social Media Embedded code
(function(){
  var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";
  i.src="https://cdn.curator.io/published/86f26b49-0658-4734-99f2-9d4d71baeba2.js";
  e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
  })();