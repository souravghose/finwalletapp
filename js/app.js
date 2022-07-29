// slider 1
var splide1 = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    snap   : true,
    gap    : '14px',
    perPage:1,
  } );
  
splide1.mount();


// slider 2
var splide2 = new Splide( '#slider2',  {
  type   : 'loop',
  drag   : 'free',
  snap   : true,
  gap    : '14px',
  perPage:7,
} ).mount();

// slider 2
var splide3 = new Splide( '#slider3',  {
  type   : 'loop',
  drag   : 'free',
  snap   : true,
  gap    : '14px',
  perPage:2,
} ).mount();


  //pwa
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceworker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }






//install 
