document.addEventListener("DOMContentLoaded", function(event) {
  getDivs();
  setInterval(changeSkill, 6000);
  skillClick();
  smoothScroll();
  fadeInLeft();
  lazyLoad();
  greet();
  navBarTitle();
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

function greet () {
    let greeting = document.getElementById('greeting')
    let presentation = document.getElementById('presentation')
    let visitor = window.location.search.split("?")[1];
    if (visitor){
    presentation.classList.toggle("black-30")
    greeting.innerHTML = "Hi there, " + visitor + "! <br /> It's nice to have you here."
    presentation.innerHTML = "I am a product designer at Nubank."
  }
}

function navBarTitle () {
  let isProject = window.location.pathname.indexOf('project');
  if(isProject != -1){

    let navBarMenuWrapper = document.getElementById('navbar-menu-wrapper');
    let navBarTitleWrapper = document.getElementById('navbar-title-wrapper');
    let navBarTitle = document.getElementById('navbar-title');
    let postTitle = document.getElementById('project-title');

    navBarTitle.innerHTML = postTitle.innerHTML;

    navBarTitleWrapper.style.maxWidth = 0;

    let timeline = new TimelineMax();
    let tween1 = new TweenMax.to(navBarMenuWrapper, .01, {maxWidth: 0});
    let tween2 = new TweenMax.to(navBarTitleWrapper, .01, {maxWidth: 3000});
    timeline
        .add(tween1)
        .add(tween2);
    let controller2 = new ScrollMagic.Controller();
    let scene2 = new ScrollMagic.Scene({
      triggerElement: '#project-title'
    })
    .addIndicators()
    .addTo(controller2)
    .setTween(timeline)

}
}

function lazyLoad() {
  var myLazyLoad = new LazyLoad({});
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
