document.addEventListener("DOMContentLoaded", function(event) {
  getSkillDiv();
  getMonthsDiv();
  setInterval(changeSkill, 2000);
  getMonths();
  var scroll = new SmoothScroll('a[href*="#"]')
});

let skillDiv;
let hiredMonths;
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

let getSkillDiv = function () {
  skillDiv = document.getElementById('skills');
}

let getMonthsDiv = function () {
  hiredMonths = document.getElementById('months');
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
