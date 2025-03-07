$(document).ready(function() {


      $(window).on("load", function() {
        $(".social3left").css("visibility", "visible");   
        removeLoadingscreen();
      })


      var scrolling = $('.scrolling');

      scrolling.click(function(e) {
        e.preventDefault();

        $('body,html').animate({
          scrollTop: $(this.hash).offset().top
        }, 1000);
      });

    });

const nav_burger = document.getElementById("burger");

nav_burger.addEventListener("click",()=>{
    //toggle menu and nav to active
    toggle_nav_active();
    
});

function removeLoadingscreen(){
  $(".loading-screen").addClass("hide");
  setTimeout(()=>{
    $(".loading-screen").css("display","none")
  },3000)

}

const modal_open = document.querySelectorAll(".modal_btn");
const modal_close = document.querySelector("#modal_close");
const modal = document.querySelector("#modal");

modal_open.forEach(element => {
    element.addEventListener("click", ()=>{
        open_modal();
    });
});

modal_close.addEventListener("click", ()=>{
    close_modal();
});

const body = document.querySelectorAll(".body");
const nav_menu = document.querySelector("#navMenu");
const nav_header = document.querySelector("#header");

const twin_nav_btn = document.querySelectorAll(".nav_icon");

function toggle_nav_active(){

    body.forEach((item)=>{
        item.classList.toggle("menu_active");
    })

    nav_menu.classList.toggle("menu_active");
    nav_header.classList.toggle("menu_active");

    twin_nav_btn.forEach((item)=>{
        item.classList.toggle("menu_active");
    });

}


function open_modal(){
    modal.classList.add("modal_active");
}

function close_modal(){
    modal.classList.remove("modal_active");

}

 /***********************
 * 
 * fade in item
 * 
 * *********************/

  const fadein = document.querySelectorAll(".fade");
 
 
  const appearOptions = {
      threshold: 0,
      rootMargin: "-100px 0px -100px 0px",
    };
    
    const appearpage = new IntersectionObserver(function (
      entries,
      appearonscroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {    
  
            //entry.target.classList.remove("fade-in");
            //appearpage1.unobserve(entry.target);
          } else {
              entry.target.classList.add("fade-in");
  
              
        }
      });
    },
    appearOptions);
    
    fadein.forEach(element => {
       appearpage.observe(element);
    });


    /***********************
 * 
 * fade in item
 * 
 * *********************/

    window.addEventListener("scroll", function (e) {
      const target = document.querySelectorAll(".scroll");

      var index = 0;
      var length = target.length;

      for (index; index < length; index++) {
     
          var posX = window.pageYOffset * target[index].dataset.ratex;
          var posY = window.pageYOffset * target[index].dataset.ratey;

          target[index].style.transform =
            "translate3d(" + posX + "px," + posY + "px,0px)";
        }
      
    });
  
  
    