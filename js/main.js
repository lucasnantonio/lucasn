document.addEventListener("DOMContentLoaded", function(event) {
  getDivs();
  setInterval(changeSkill, 6000);
  skillClick();
  getMonths();
  navigator();
  articleOpacity();
  setupNavigator();
  // fadeInBody();
  projectsCarousel();
  smoothScroll();
  showImages();
  articleEntranceAnimation();
  fadeInLeft();
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
let body;
let sections;
let sectionTitles;
let articles;
let articleLinks;
let articleContainer;
let carouselContainer;
let previousButton;
let nextButton;
let imgContainers;

let getDivs = function() {
  content = document.getElementById('content')
  skillDiv = document.getElementById('skills');
  hiredMonths = document.getElementById('months');
  profilePic = document.getElementById('profilePic');
  sectionTitles = document.querySelectorAll('.section-title');
  sectionTitleLinks = document.querySelectorAll('.section-title a h3');
  sectionTitleBacks = document.querySelectorAll('.section-title a h4');
  articles = document.querySelectorAll('#articleList div');
  articleLinks = document.querySelectorAll('#articleList div a');
  titleLucas = document.getElementById('title-lucas');
  metadata = document.querySelectorAll('.metadata');
  body = document.querySelector('body');
  carouselContainer = document.querySelector('#main-carousel');
  previousButton = document.querySelectorAll('.carousel--previous');
  nextButton = document.querySelectorAll('.carousel--next');
  imgContainers = document.querySelectorAll('.img-container');
  images = document.querySelectorAll('img');
}

let i = 0;

// function fadeInLeft(){
//   let fadeInLeft = document.querySelectorAll('.js-fadein-left');
//   setTimeout(function(){
//     fadeInLeft.forEach(function(item){
//       item.style.opacity = 0;
//       item.classList.add('animated', 'fadeInLeft')
//     })
//   }, 2000)

function fadeInLeft(){
  let fadeInLeft = document.querySelectorAll('.js-fadein-left');
  fadeInLeft.forEach(function(item){
    item.style.opacity = 0;
    item.style.transform = "translateX(-100px)";
  })
  setTimeout(function(){
    anime({
      targets: fadeInLeft,
      translateX: 0,
      opacity: 1,
      elasticity: 0,
      duration: function(el, i, l) {
        return 1300 + (i * 1300);
      }
    });
}, 2000);
}

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

function skillClick() {
  skillDiv.onclick = function(){
    changeSkill();
  }
}

let smoothScroll = function(){
  var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000,
    easing: 'easeInOutQuint'
  })
}

let projectsCarousel = function(){
  var flkty = new Flickity( carouselContainer, {
  // options
  prevNextButtons: false,
  pageDots: false,
  cellAlign: 'left',
  contain: true,
  cellSelector: ".carousel-cell"
});

  previousButton.forEach(
    function(item){
      item.addEventListener( 'click', function() {
      flkty.previous(true);
    });
  });

  nextButton.forEach(
    function(item){
      item.addEventListener( 'click', function() {
      flkty.next(true);
    });
  });
}

function hideImages(){
  imgContainers.forEach(function(item){
    item.classList.add("animated", 'bg-near-white', 'o-0');
  })
}

function fadeInUpImages(){
  imgContainers.forEach(function(item){
    let child = item.childNodes[0];
    child.classList.add('o-0', 'animated');
    imagesLoaded(child, function(){
      child.classList.add('fadeIn');
    })
    if (isInViewport(item)){
      item.classList.add('fadeInUp');
    }
  })
}

function showImages() {
  hideImages();
  fadeInUpImages();
  imgContainers.forEach(function(item){
    window.addEventListener("scroll", function(item){
      fadeInUpImages();
    })
  })

  }

function changeSkill() {
  skillDiv.classList.toggle('mw0')
  setTimeout(function() {
    skillDiv.innerHTML = skillList[i];
    skillDiv.classList.toggle('mw0')
  }, 1000);
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

let setupNavigator = function() {
  sectionTitleLinks.forEach(function(item) {
    item.parentElement.setAttribute('href', "#section-" + item.innerHTML.toLowerCase())
    item.parentElement.parentElement.id = "section-" + item.innerHTML.toLowerCase()
  })
  sectionTitleBacks.forEach(function(item, index) {
    previousSection = sectionTitleLinks[index - 1];
    if (index - 1 >= 0) {
      item.parentElement.setAttribute('href', "#section-" + sectionTitleLinks[index - 1].innerHTML.toLowerCase())
    } else {
      item.parentElement.setAttribute('href', "")
    }
  })
}

let navigator = function() {
  sectionTitles.forEach(
    function(item, index) {
      // item.classList.add('o-30')
      item.onmouseover = function() {
        item.classList.remove('o-30')
        let y = item.getBoundingClientRect().top;
        if (y >= -100 && y <= 200 && index != 0) {
          let backButton = item.querySelectorAll('a:first-child');
          backButton[0].classList.add('js-animate-header');
        }
      }
      item.onmouseleave = function() {
        // item.classList.add('o-30')
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
            // item.classList.add('o-30')
            backButton[0].classList.remove('js-animate-header');
          }, 300);

        }
      }
    })
}

let revealMetadata = function(item){
  item.classList.remove('o-0', 'dn');
}

let articleEntranceAnimation = function() {
  articles.forEach(function(item){
    item.style.opacity = 0;
    item.style.transform = "translateX(-200px)";
  })

  window.addEventListener('scroll', function (){
    if (isInViewport(articles[0])){
    anime(
      {
        targets: articles,
        translateX: 0,
        opacity: 1,
        elasticity: 0,
        duration: function(el, i, l) {
          return 300 + (i * 300);
        }
      }
    );
  }
  })

}

let articleOpacity = function() {
  articles.forEach(function(item, index) {

    item.onmouseover = function() {
      articles.forEach(function(itemB, index) {
        itemB.classList.add("o-30");
        metadata[index].classList.add('o-0', 'dn');
      });
      item.classList.remove("o-30");
      metadata[index].classList.remove('o-0', 'dn');

      if (index < articles.length - 1) {
        item.classList.add('bb');
        articles[index + 1].classList.remove('bt');
      }
    }

    item.onmouseleave = function() {
      articles.forEach(function(item) {
        item.classList.remove('o-30');
        metadata[index].classList.add('o-0', 'dn');
      });
      if (index < articles.length - 1) {
        item.classList.remove('bb');
        articles[index + 1].classList.add('bt');
      }
    }
  });
}

let fadeInBody = function() {
  body.classList.add('o-0');
  setTimeout(function() {
    body.classList.remove('o-0')
  }, 100);
}
