let body = document.body;
let slides = document.querySelectorAll(".slide");
let rightBtn = document.querySelector("#right");
let leftBtn = document.querySelector("#left");


let activeSlide = 0;

addBackground();

function addBackground(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;

}


