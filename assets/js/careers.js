var navNext = document.querySelectorAll(".next");
var navPrevious = document.querySelectorAll(".previous");

var pages = document.querySelectorAll(".page");
var pageIndex = 0;


navNext.forEach((element)=>{
    element.addEventListener("click",function (){
        nextPage();
    });
});

navPrevious.forEach((element)=>{
    element.addEventListener("click",function (){
        previousPage();
    });
});


function nextPage(){
    if(pageIndex < pages.length - 1){
        hideCurrentPage(pageIndex,'left');
        pageIndex++;
    }
    console.log("next: " + pageIndex);
    showPage(pageIndex);
}

function previousPage(){
    if(pageIndex > 0){
        hideCurrentPage(pageIndex,'right');
        pageIndex--;
    }
    console.log("previous: " + pageIndex);
    showPage(pageIndex);
}

function hideCurrentPage(target,direction){
  
    document.querySelector(`#page-${target}`).classList.add(`slide-${direction}`);
    
    
}

function showPage(target){
    document.querySelector(`#page-${target}`).classList.remove(`slide-left`);
    document.querySelector(`#page-${target}`).classList.remove(`slide-right`);
}