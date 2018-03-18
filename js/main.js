document.addEventListener("DOMContentLoaded", function(event) {
  getDivs();
  setInterval(changeSkill, 2000);
  getMonths();
  menuAnimation();
  var scroll = new SmoothScroll('a[href*="#"]')
});

let skillDiv;
let hiredMonths;
let menuBtn;
let menuContainer;
let skillList = [
  'research',
  'explore',
  'design',
  'validate',
  'define',
  'prototype',
  'test',
  'ship',
  'write',
  'whiteboard',
  'sketch'
]

let getDivs = function () {
  skillDiv = document.getElementById('skills');
  hiredMonths = document.getElementById('months');
  menuBtn = document.getElementById('menu-button');
  menuContainer = document.getElementById('menu-container');
}

let i = 0;
function changeSkill() {
  skillDiv.classList.toggle('o-0')
  setTimeout(function(){
    skillDiv.innerHTML = skillList[i];
    skillDiv.classList.toggle('o-0')
  }, 300);

  i = (i + 1) % skillList.length;

}

let getMonths = function(){
  let today = new Date();
  let hiredDate = new Date("April 08, 2016 01:15:00");
  let months = (today.getFullYear() - hiredDate.getFullYear())*12
  months-= hiredDate.getMonth() + 1;
  months+= today.getMonth() +1;
  hiredMonths.innerHTML = (months <= 0 ? 0 : months);
}

let animateMenu = function (){
  menuContainer.classList.toggle('js-hidden-left');
}

let menuAnimation = function(){
  menuBtn.addEventListener('mouseover',animateMenu);
  menuContainer.addEventListener('mouseout',animateMenu);
}
