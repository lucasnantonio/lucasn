document.addEventListener("DOMContentLoaded", function(event) {
  getDivs();
  setInterval(changeSkill, 6000);
  skillClick();
  smoothScroll();
  fadeInLeft();
  lazyLoad();
});

let skillList = [
  'design',
  'validate',
  'explore',
  'research',
  'define',
  'prototype',
  'test',
  'diagram',
  'ship',
  'write',
  'whiteboard',
  'sketch',
  'visualise',
]

let skillDiv;
let sections;
let sectionTitles;
let articles;
let articleLinks;
let articleContainer;
let previousButton;
let nextButton;

let getDivs = function() {
  skillDiv = document.getElementById('skills');
}

function lazyLoad() {
  var myLazyLoad = new LazyLoad();
}

function callBack () {
  alert('loaded!');
}

function fadeInLeft() {
  let sections = document.querySelectorAll('section');
  let controller = new ScrollMagic.Controller();

  sections.forEach(function(section) {
    let sectionItems = section.querySelectorAll('.js-fadein-left')
    sectionItems.forEach(function(item){
      item.style.opacity = 0;
    })
    let tween = new TweenMax.staggerFromTo(sectionItems, .7, {
        transform: "translateX(-50px)",
        opacity: 0,
      }, {
        transform: "translateX(0px)",
        opacity: 1,
      },
      0.2);
    let scene = new ScrollMagic.Scene({
        triggerElement: section,
        offset: -400 // start scene after scrolling for 100px
      })
      .setTween(tween)
      .addTo(controller);
  })
}

function isInViewport(element, offset) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;

  return (
    rect.top >= 0 + offset &&
    rect.bottom <= (30000)
  )
}

function skillClick() {
  if(skillDiv =! null && skillDiv){
  skillDiv.onclick = function() {
    changeSkill();
  }
}
}

let smoothScroll = function() {
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: 'easeInOut'
  })
}

let skillCount = 0;
function changeSkill() {
  if(skillDiv){
  skillDiv.classList.toggle('mw0')
  setTimeout(function() {
    skillDiv.innerHTML = skillList[skillCount];
    skillDiv.classList.toggle('mw0')
  }, 1000);
  skillCount = (skillCount + 1) % skillList.length;
} else{
  return;
}
}
