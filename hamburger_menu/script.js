 let hamburger = document.getElementById("hamburger");
  let navUL = document.getElementById("nav-ul"); 

hamburger.addEventListener("click", () => {
     navUL.classList.toggle("show");
});