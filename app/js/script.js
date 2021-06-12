'Use strict'

// TODO: declaring variables

const btnHamburger = document.getElementById('btnHamburger')
const header = document.querySelector('.header')
const headerLink = document.querySelectorAll ('.header__link')
const headerLinks = document.querySelector(".header__links");
const headerLinkSub = document.querySelectorAll(".header__link-sub");
const headerLinkContainer = document.querySelectorAll(".header__links-container");
const tablet = window.matchMedia("(max-width: 1024px)");
const tabletMin = window.matchMedia("(min-width: 1024px)");
const nav = document.querySelector("nav");
const logo = document.querySelector(".header__logo");
const navLink = document.querySelectorAll(".nav__link");

// const headerLinkImg = headerLink.querySelector('img')


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

        navLink.forEach( link => {
          link.addEventListener("click", function (e) {
            e.preventDefault();

            link.querySelector("img").classList.toggle("icon-rotate");

            link.nextElementSibling.classList.toggle('header__links-sub--active');
        });
        
        
      });
    }
  });

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

    // console.log(e.target);

    el.querySelector("img").classList.toggle("icon-rotate");

    sibling.classList.toggle("header__link-sub-hide");
  

    
  });

  // el.addEventListener("mouseout", function (e) {
  //   sibling.classList.add("header__link-sub-hide");
  // });

  // parent.addEventListener("mouseout", function (e) {
  //   sibling.classList.add("header__link-sub-hide");
  // });
  

  

})









