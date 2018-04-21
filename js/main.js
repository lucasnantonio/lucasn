document.addEventListener("DOMContentLoaded", function(event) {
  getDivs();
  setInterval(changeSkill, 12000);
  skillClick();
  getMonths();
  navigator();
  articleOpacity();
  setupNavigator();
  fadeIn();
  showProfilePic(profilePic);
  projectsCarousel();
  smoothScroll();
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


let getDivs = function() {
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
}

let i = 0;

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

function showImage(img) {
  img.classList.remove('o-0');
  img.classList.add('js-fadeIn');
  img.style.marginLeft = '0rem';
  img.src = "./images/lucasneumann.png"
}

function showProfilePic(profilePic) {
  profilePic.style.marginLeft = '5rem';
  imagesLoaded(profilePic, function(){
  showImage(profilePic);
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
    console.log(index + " " + item)
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

let fadeIn = function() {
  body.classList.add('o-0');
  setTimeout(function() {
    body.classList.remove('o-0')
  }, 100);
}
