'Use strict'

// TODO: declaring variables

const btnHamburger = document.getElementById('btnHamburger')
const header = document.querySelector('.header')
const headerButton = document.querySelector('.header__buttons')
const headerLink = document.querySelectorAll ('.header__link')
const headerLinks = document.querySelector(".header__links");
const headerLinkSub = document.querySelectorAll(".header__link-sub");
const headerLinkContainer = document.querySelectorAll(".header__links-container");
const tablet = window.matchMedia("(max-width: 1024px)");
const tabletMin = window.matchMedia("(min-width: 1024px)");
const nav = document.querySelector("nav");
const logo = document.querySelector(".header__logo");
const navLink = document.querySelectorAll(".nav__link");




    btnHamburger.addEventListener("click", function (e) {
      e.preventDefault();

      if(!tablet.matches) return;

      if (header.classList.contains("open")) {
        header.classList.remove("open");
      } else {
        header.classList.add("open");
        headerLink.forEach((element) => {
          element.querySelector("img").src = "./images/icon-arrow-dark.svg";
        }); //* changes the dropdown icon color in the dropdown

        headerButton.style.zIndex = '10000';



        navLink.forEach( link => {
          link.addEventListener("click", function (e) {
            e.preventDefault();

            link.querySelector("img").classList.toggle("icon-rotate");

            link.nextElementSibling.classList.toggle('header__links-sub--active');
        });
        
        
      });
    }
  });

  window.addEventListener('resize', function(e){

    if (tabletMin.matches) {
      headerLink.forEach((element) => {
        element.querySelector("img").src = "./images/icon-arrow-light.svg";
      });
      if (header.classList.contains("open")) {
        header.classList.remove("open");
      }
    }

  })



//  ***************************************************************************


// TODO: Implementing menu fade animation
const navHover = function(e,opacity){

  if (!tabletMin.matches) return;

  if (e.target.classList.contains('nav-fade')){
    const link = e.target;
    const sibling = document.querySelectorAll('.nav-fade');

    sibling.forEach(el => {
      if(el !== link) el.style.opacity = opacity;
    })

    logo.style.opacity = opacity;
  }
}



header.addEventListener('mouseover',function(e){
  navHover(e, 0.5);;
})

header.addEventListener('mouseout', function(e){
  navHover(e, 1);
})

// ************************************************************************

navLink.forEach( el => {

  const sibling = el.nextElementSibling;
  const parent = el.parentElement;

  el.addEventListener("click", function (e) {
    e.preventDefault();
    

    if (!tabletMin.matches) return;

    el.querySelector("img").classList.toggle("icon-rotate");

    sibling.classList.toggle("header__link-sub-hide");
  

    
  });

  
  

  

})


// ********************************************************************************************

// TODO: Revealing elements on scroll
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;
  
  entry.target.classList.add("section--active");
  observer.unobserve(entry.target)
}

 const sectionObserver = new IntersectionObserver(revealSection, {root:null, threshold: 0.2});

  allSections.forEach( function(section) {
   sectionObserver.observe(section);
  
  })






