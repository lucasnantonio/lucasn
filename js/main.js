document.addEventListener("DOMContentLoaded", function(event) {
  getDivs();
  setInterval(changeSkill, 2000);
  getMonths();
  menuSetup();
  navigator();
  articleOpacity();
  // titleOpacity();
  var scroll = new SmoothScroll('a[href*="#"]')
});

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

let skillDiv;
let hiredMonths;
let menuBtn;
let menuContainer;
let sections;
let sectionTitles;
let articles;
let articleLinks;
let articleContainer;

let getDivs = function() {
  skillDiv = document.getElementById('skills');
  hiredMonths = document.getElementById('months');
  menuBtn = document.getElementById('menu-button');
  menuContainer = document.getElementById('menu-container');
  contentWrapper = document.getElementById('content-wrapper');
  sectionTitles = document.querySelectorAll('.section-title');
  articles = document.querySelectorAll('#articleList div');
  articleLinks = document.querySelectorAll('#articleList div a');
}

let i = 0;

function changeSkill() {
  skillDiv.classList.toggle('o-0')
  setTimeout(function() {
    skillDiv.innerHTML = skillList[i];
    skillDiv.classList.toggle('o-0')
  }, 300);

  i = (i + 1) % skillList.length;

}

let getMonths = function() {
  let today = new Date();
  let hiredDate = new Date("April 08, 2016 01:15:00");
  let months = (today.getFullYear() - hiredDate.getFullYear()) * 12
  months -= hiredDate.getMonth() + 1;
  months += today.getMonth() + 1;
  hiredMonths.innerHTML = (months <= 0 ? 0 : months);
}

let animateMenuEnter = function() {
  menuContainer.classList.remove('js-hidden-left');
  contentWrapper.style.opacity = .1;
  menuBtn.removeEventListener('mouseover', animateMenuEnter);
}

let animateMenuLeave = function() {
  menuContainer.classList.add('js-hidden-left');
  contentWrapper.style.opacity = 1;
  menuBtn.addEventListener('mouseover', animateMenuEnter);
}

let menuSetup = function() {
  menuBtn.addEventListener('mouseover', animateMenuEnter);
  menuContainer.addEventListener('mouseleave', animateMenuLeave);
  menuContainer.addEventListener('click', animateMenuLeave);
}

let navigator = function() {
  sectionTitles.forEach(
    function(item, index) {
      item.onmouseover = function() {
        let y = item.getBoundingClientRect().top;
        if (y >= -100 && y <= 200) {
          let backButton = item.querySelectorAll('a:first-child');
          backButton[0].classList.add('js-animate-header');
        }
      }
      item.onmouseleave = function() {
        let y = item.getBoundingClientRect().top;
        if (y >= -100 && y <= 200) {
          let backButton = item.querySelectorAll('a:first-child');
          backButton[0].classList.remove('js-animate-header');
        }
      }
      item.onclick = function() {
        let y = item.getBoundingClientRect().top;
        if (y >= -100 && y <= 200) {
          setTimeout(function() {
            let backButton = item.querySelectorAll('a:first-child');
            backButton[0].classList.remove('js-animate-header');
          }, 300);

        }
      }
    })
}

let titleOpacity = function(){
  window.onscroll = function(){
    console.log('scroll');
    sectionTitles.forEach(function(item){
      let y = item.getBoundingClientRect().top;
      if (y >= -100 && y <= 200) {
        item.querySelectorAll('a h1')[0].classList.remove('o-20');
      } else {
        item.querySelectorAll('a h1')[0].classList.add('o-20');
      }
    });
  }
}

let articleOpacity = function (){
  articles.forEach(function(item){
    item.onmouseover = function(){
      articleLinks.forEach(function(itemB){
        itemB.classList.add("o-20");
      });
      item.querySelectorAll('a')[0].classList.remove("o-20");
    }
    item.onmouseleave = function(){
      articleLinks.forEach(function(itemB){
        itemB.classList.remove("o-20");
      });
      item.querySelectorAll('a')[0].classList.remove("o-20");
      console.log("removed");
    }
  })
}
