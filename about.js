
let menu = document.getElementsByClassName("menu");
let cross = document.getElementsByClassName("cross");
let right = document.getElementsByClassName("right");
let anchorCloseNav = document.getElementsByClassName("anchorCloseNav");
let overlay = document.getElementsByClassName("overlay");

menu[0].addEventListener("click", ()=>{
    right[0].style.right = "0";
    overlay[0].style.display = "block";

})

cross[0].addEventListener("click", ()=>{
    right[0].style.right = "-40%";
    overlay[0].style.display = "none";
})

Array.from(anchorCloseNav).forEach((elements)=>{
  elements.addEventListener("click", ()=>{
    right[0].style.right = "-40%";
    right[0].style.transition = "0.6s";
    overlay[0].style.display = "none";
  })
})
