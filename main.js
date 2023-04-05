//start h1 animation, when hero background is loaded
let hero = document.querySelector('.hero');
let header = document.querySelector(".header");
let mainHeading = document.querySelector(".heading-primary-main");
let subHeading = document.querySelector(".heading-primary-sub");
let img = new Image();
let source;


// Detect mobile device, if true => smaller size hero img
if (/Android|iPhone/i.test(navigator.userAgent)) {
    source = 'images/hero-img-mobile.webp';

  } else {
    source = 'images/hero-img.jpg';
  }
  
console.log(source);



//start Hero text animation when Hero image is loaded
img.src = source;
img.addEventListener("load", _ => {
    hero.style.backgroundimage = `url(${img.src})`;
    console.log(hero.style.backgroundimage);
    setTimeout(_ => {
        mainHeading.style.animation = "appearFromLeft 2s forwards";
        subHeading.style.animation = "appear 2s 2s forwards";
    },500)

    //for garbage collector, save memory
    img = null;
})

// Intersection OBserver;

const ob = new IntersectionObserver(function(entries) {

    console.log(entries);
    if(!entries[0].isIntersecting) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


ob.observe(hero);


//Menu Button
let btn = document.querySelector(".menu-button");
let nav = document.querySelector(".header nav");
let closeIcon = document.querySelector(".close-icon");
let menuIcon = document.querySelector(".hamburger");

btn.addEventListener("click", _ => {
    nav.classList.toggle("active");
    menuIcon.classList.toggle("close");

    closeIcon.classList.toggle("close");

})

            


