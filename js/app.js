

//for sec3 card slider

const sec3CardSlide = document.getElementById('sec3Cardslide');
const sec3Cards = document.querySelectorAll('.sec3_card');

//prev & next Button for sec3 Slider
const cardprevBtn = document.querySelector('#cardprevBtn');
const cardnextBtn = document.querySelector('#cardnextBtn');

//count
let count = 1;

const cardSize = sec3Cards[0].clientWidth;

sec3CardSlide.style.transform = 'translateX(' + (-cardSize * count) + 'px)';

//Button Listners

cardnextBtn.addEventListener('click', () => {
    if (count >= sec3Cards.length - 1) return;
    sec3CardSlide.style.transiton = "transform 0.4s ease-in-out";
    count++;
    sec3CardSlide.style.transform = 'translateX(' + (-cardSize * count) + 'px)';
});

cardprevBtn.addEventListener('click', () => {
    if (count <= 0) return;
    sec3CardSlide.style.transiton = "transform 0.4s ease-in-out";
    count--;
    sec3CardSlide.style.transform = 'translateX(' + (-cardSize * count) + 'px)';
});

sec3CardSlide.addEventListener('transitionend', () => {
    if (sec3Cards[count].id === 'sec3lastClone') {
        sec3CardSlide.style.transiton = 'none';
        count = sec3Cards.length - 2;
        sec3CardSlide.style.transform = 'translateX(' + (-cardSize * count) + 'px)';
    };
    if (sec3Cards[count].id === 'sec3firstClone') {
        sec3CardSlide.style.transiton = 'none';
        count = sec3Cards.length - count;
        sec3CardSlide.style.transform = 'translateX(' + (-cardSize * count) + 'px)';
    };
});

//for sec3 cards Dots navigations

var sec3Slide = document.getElementById("sec3Cardslide");

// for Dots Navigatiom
var btnCard1 = document.getElementById("btnCard1");
var btnCard2 = document.getElementById("btnCard2");
var btnCard3 = document.getElementById("btnCard3");
var btnCard4 = document.getElementById("btnCard4");

btnCard1.addEventListener('click', () => {
    sec3Slide.style.transform = "translateX(0%)";
});

btnCard2.addEventListener('click', () => {
    sec3Slide.style.transform = "translateX(-20%)";
});

btnCard3.addEventListener('click', () => {
    sec3Slide.style.transform = "translateX(-40%)";
});

btnCard4.addEventListener('click', () => {
    sec3Slide.style.transform = "translateX(-60%)";
});


/* For seclang Languages carousel slider */

const langUl = document.getElementById('sec_lang_icons');
const langli = document.querySelectorAll('.sec_lang_li img');

//prev & next Button for sec3 Slider
const langprevBtn = document.querySelector('#langprevBtn');
const langnextBtn = document.querySelector('#langnextBtn');

//count
let countsa = 1;

const siza = langli[0].clientWidth;


langUl.style.transform = 'translateX(' + (-siza * countsa) + 'px)';

//Button Listners

langnextBtn.addEventListener('click', () => {
    if (countsa >= langli.length - 1) return;
    langUl.style.transiton = "transform 0.4s ease-in-out";
    countsa++;
    langUl.style.transform = 'translateX(' + (-siza * countsa) + 'px)';
});

langprevBtn.addEventListener('click', () => {
    if (countsa <= 0) return;
    langUl.style.transiton = "transform 0.4s ease-in-out";
    countsa--;
    langUl.style.transform = 'translateX(' + (-siza * countsa) + 'px)';
});

langUl.addEventListener('transitionend', () => {
    if (langli[countsa].id === 'endingClone') {
        langUl.style.transiton = 'none';
        countsa = langli.length - 2;
        langUl.style.transform = 'translateX(' + (-siza * countsa) + 'px)';
    };
    if (langli[countsa].id === 'startingClone') {
        langUl.style.transiton = 'none';
        countsa = langli.length - countsa;
        langUl.style.transform = 'translateX(' + (-siza * countsa) + 'px)';
    };
});





// const carouselSlide = document.querySelector('carousel-slide');
// const carouselImages = document.querySelectorAll('carousel-slide img');

// //buttons

// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// //counter
// let counter = 1;

// const imgSize = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';

// nextBtn.addEventListener('click', () => {
//     if (counter >= carouselImages.length - 1) return;
//     carouselSlide.style.transiton = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
// });

// prevBtn.addEventListener('click', () => {
//     if (counter <= 0) return;
//     carouselSlide.style.transiton = "transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
// });

// carouselSlide.addEventListener('transitionend', () => {
//     if (carouselImages[counter].id === 'lastClone') {
//         carouselSlide.style.transiton = 'none';
//         counter = carouselImages.length - 2;
//         carouselSlide.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
//     };
//     if (carouselImages[counter].id === 'firstClone') {
//         carouselSlide.style.transiton = 'none';
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
//     };
// });



// //Movement Animation to happen
// const card = document.querySelector(".card");
// const container = document.querySelector(".container");
// //Items
// const title = document.querySelector(".title");
// const sneaker = document.querySelector(".sneaker img");
// const purchase = document.querySelector(".purchase");
// const description = document.querySelector(".info h3");
// const sizes = document.querySelector(".sizes");

// //Moving Animation Event
// container.addEventListener("mousemove", (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });
// //Animate In
// container.addEventListener("mouseenter", (e) => {
//   card.style.transition = "none";
//   //Popout
//   title.style.transform = "translateZ(150px)";
//   sneaker.style.transform = "translateZ(200px) rotateZ(-10deg)";
//   description.style.transform = "translateZ(125px)";
//   sizes.style.transform = "translateZ(100px)";
//   purchase.style.transform = "translateZ(75px)";
// });
// //Animate Out
// container.addEventListener("mouseleave", (e) => {
//   card.style.transition = "all 0.5s ease";
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   //Popback
//   title.style.transform = "translateZ(0px)";
//   sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
//   description.style.transform = "translateZ(0px)";
//   sizes.style.transform = "translateZ(0px)";
//   purchase.style.transform = "translateZ(0px)";
// });
