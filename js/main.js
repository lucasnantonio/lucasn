document.addEventListener("DOMContentLoaded", function(event) {
  getDivs();
  setInterval(changeSkill, 2000);
  getMonths();
  menuSetup();
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
  'diagram',
  'ship',
  'write',
  'whiteboard',
  'sketch',
  'inform',
  'understand',
  'visualise',
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

let animateMenuEnter = function (){
  menuContainer.classList.remove('js-hidden-left');
  menuBtn.removeEventListener('mouseover',animateMenuEnter);
}

let animateMenuLeave = function (){
  menuContainer.classList.add('js-hidden-left');
  menuBtn.addEventListener('mouseover',animateMenuEnter);
}

let menuSetup = function(){
  menuBtn.addEventListener('mouseover',animateMenuEnter);
  menuContainer.addEventListener('mouseleave',animateMenuLeave);
}
