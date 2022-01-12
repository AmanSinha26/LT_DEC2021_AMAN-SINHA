const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

const showmoreBtn1 = document.querySelector('.showmore-btn1');
const showmoreMen = document.querySelector('.showmore-men');
const mensSection = document.querySelector('.mens');
showmoreMen.style.display = "none";

const showmoreBtn2 = document.querySelector('.showmore-btn2');
const showmoreWomen = document.querySelector('.showmore-women');
const womensSection = document.querySelector('.womens');
showmoreWomen.style.display = "none";

const showmoreBtn3 = document.querySelector('.showmore-btn3');
const showmoreKids = document.querySelector('.showmore-kids');
const kidsSection = document.querySelector('.kids');
showmoreKids.style.display = "none";


showmoreBtn1.addEventListener("click", () => {
  
    if(showmoreMen.style.display === "none"){
      showmoreMen.style.display = "grid";
      showmoreBtn1.innerHTML = "show less"
    }
    else{
      showmoreMen.style.display = "none";
      showmoreBtn1.innerHTML = "show more";
      mensSection.scrollIntoView();
    }
});

showmoreBtn2.addEventListener("click", () => {
  
  if(showmoreWomen.style.display === "none"){
    showmoreWomen.style.display = "grid";
    showmoreBtn2.innerHTML = "show less"
  }
  else{
    showmoreWomen.style.display = "none";
    showmoreBtn2.innerHTML = "show more"
    womensSection.scrollIntoView();
  }
});

showmoreBtn3.addEventListener("click", () => {
  
  if(showmoreKids.style.display === "none"){
    showmoreKids.style.display = "grid";
    showmoreBtn3.innerHTML = "show less"
  }
  else{
    showmoreKids.style.display = "none";
    showmoreBtn3.innerHTML = "show more"
    kidsSection.scrollIntoView();
  }
});

const scrollBtn = document.querySelector('#myBtn');
scrollBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
