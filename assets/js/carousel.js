var slides = document.querySelectorAll(".reviews");
var slideIndex = 0;

showSlides();

function showSlides(){
    if(slideIndex > slides.length){slideIndex=1}
    $(".reviews").removeClass("active");
    $(".reviews").eq( slideIndex ).addClass("active");
    slideIndex++;
    setTimeout(showSlides,4000);
}
