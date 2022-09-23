let slideHead = document.querySelectorAll(".slide-head");
let slideText = document.querySelectorAll(".slide-text");
let slideImg = document.querySelectorAll(".slide-img");
let leftBtn = document.querySelector("#prev-btn");
let rightBtn = document.querySelector("#next-btn");
let btnContainer = document.querySelectorAll(".btn-container");
let heading = document.querySelectorAll(".h");
let text = document.querySelectorAll(".t");
let current = 0;



// this clears content before change of slide
function reset() {
    for (let i = 0; i < slideHead.length; i++)
    for (let i = 0; i < slideText.length; i++)
    for (let i = 0; i < slideImg.length; i++) {
        slideHead[i].setAttribute ("style","display:none");
        slideText[i].setAttribute ("style","display:none;");
        slideImg[i].setAttribute ("style","display:none;");
    }
}
// initialise slider
function startSlide() {
    reset();
    slideHead[0].style.display = "flex";
    slideText[0].style.display = "flex";
    slideImg[0].style.display = "flex";

}
// show prev
function slideLeft() {
    reset();
    slideHead[current - 1].style.display = "flex";
    slideText[current - 1].style.display = "flex";
    slideImg[current - 1].style.display = "flex";
    current --;
}
// show next
function slideRight() {
    reset();
    slideHead[current + 1].style.display = "flex";
    slideText[current + 1].style.display = "flex";
    slideImg[current + 1].style.display = "flex";
    current ++;
    
}
// left arrow click
leftBtn.addEventListener("click",function() {
    if(current === 0){
        current = slideHead.length;
        current = slideText.length;
        current = slideImg.length;
    }
    slideLeft();
    
});
// right arrow click
rightBtn.addEventListener("click",function() {
    if(current === slideHead.length - 1)
    if(current === slideText.length - 1)
    if(current === slideImg.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();
