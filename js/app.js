
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
        .register("serviceworker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }


  window.addEventListener("beforeinstallprompt", ev => { 
    // Stop Chrome from asking _now_
    ev.preventDefault();
  
    // Create your custom "add to home screen" button here if needed.
    // Keep in mind that this event may be called multiple times, 
    // so avoid creating multiple buttons!
    myCustomButton.onclick = () => ev.prompt();
  });