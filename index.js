var typed;
var typed1;

function typingJS1() {
  if (typed1) {
    typed1.destroy();
  }
  typed1 = new Typed("#element1", {
    strings: ["Plumber", ""],
    typeSpeed: 50,
  });
}

function typingJS() {
  if (typed) {
    typed.destroy();
  }
  typed = new Typed("#element", {
    strings: [
      "My Skills are",
      "New construction work",
      "Booster pump fixing",
      "Submersible pump fixing",
      "Swimming pool pump room fixing",
      "Fountain work",
      "Fire fighting",
      "Pump room specilist",""
    ],
    typeSpeed: 50,
  });
}
typingJS1();
typingJS();
setInterval(typingJS1, 5000);
setInterval(typingJS, 21500);


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
