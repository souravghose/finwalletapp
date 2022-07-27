
var splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    snap   : true,
    gap    : '14px',
    perPage:1,
  } );
  
  splide.mount();


  //pwa
  navigator.serviceWorker && navigator.serviceWorker.register('js/sw.js').then(function(registration) {  console.log('Excellent, registered with scope: ', registration.scope);});