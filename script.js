
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

let elemnt=document.querySelectorAll(".elemnt");
let fx=document.querySelector(".fx-display");

let container=document.querySelector(".elemnt-container");
container.addEventListener("mouseenter",()=>{
fx.style.display="block";
})

container.addEventListener("mouseleave",()=>{
fx.style.display="none";
})

elemnt.forEach((a)=>{
  a.addEventListener("mouseenter",()=>{
    let image=a.getAttribute("imag-data");
    fx.style.backgroundImage=`url(${image})`
  })
})
