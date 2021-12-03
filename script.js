
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  
  /* alert when button is clicked*/
  function myFunction() {
    alert("You will be referred to a new tab.");
    window.open("https://www.sportshub.com.sg/event-detail/423")
  }
  
  function Function1(){
    alert("You will be referred to a new tab.");
    window.open("https://en.ygselect.com/category/blackpink/43/")
  }
  
  function facebookFunction(){
    alert("You will be referred to a new tab.");
    window.open("https://www.facebook.com/BLACKPINKOFFICIAL")
  }
  
  function twitterFunction(){
    alert("You will be referred to a new tab.");
    window.open("https://twitter.com/BLACKPINK")
  }
  
  function youtubeFunction(){
    alert("You will be referred to a new tab.");
    window.open("https://www.youtube.com/BLACKPINKOFFICIAL")
  }
  
  function instagramFunction(){
    alert("You will be referred to a new tab.");
    window.open("https://www.instagram.com/BLACKPINKOFFICIAL/")
  }
  
  function submitButton(){
    alert("Your response has been submitted.");
  }
  
  /* slideshow for items*/
  var slideNo = 1;
    displaySlides(slideNo);
  
  function plusSlides(n) {
    displaySlides(slideNo += n);
  }
  
  function currentSlide(n) {
    displaySlides(slideNo = n);
  }
  
  function displaySlides(n) {
    var i;
    var mslides = document.getElementsByClassName("slides");
    var mdots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > mslides.length) {slideNo = 1}
    if (n < 1) {slideNo = mslides.length}
    for (i = 0; i < mslides.length; i++) {
        mslides[i].style.display = "none";
    }
    for (i = 0; i < mdots.length; i++) {
        mdots[i].className = mdots[i].className.replace(" active", "");
    }
    mslides[slideNo-1].style.display = "block";
    mdots[slideNo-1].className += " active";
    captionText.innerHTML = mdots[slideNo-1].alt;
  }
  
  
  
  
  