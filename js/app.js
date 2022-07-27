
var splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    snap   : true,
    gap    : '14px',
    perPage:1,
  } );
  
  splide.mount();


  //pwa
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("js/sw.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }