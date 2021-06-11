'Use strict'

// TODO: declaring variables

const btnHamburger = document.getElementById('btnHamburger')
const header = document.querySelector('.header')
const headerLink = document.querySelectorAll ('.header__link')
const headerLinks = document.querySelector(".header__links");
const headerLinkSub = document.querySelector(".header__links-sub");
const headerLinkContainer = document.querySelectorAll(".header__links-container");
// const headerLinkImg = headerLink.querySelector('img')


    btnHamburger.addEventListener("click", function () {

      if (header.classList.contains("open")) {
        header.classList.remove("open");
      } else {
        header.classList.add("open");
        headerLink.forEach((element) => {
          element.querySelector("img").src = "./images/icon-arrow-dark.svg";
        }); //* changes the dropdown icon color in the dropdown

        headerLinks.addEventListener("click", function (e) {
          e.preventDefault();
          if (e.target.closest(".header__link")) {
            const clicked = e.target.closest(".header__link");

            clicked.querySelector("img").classList.toggle("icon-rotate");

            clicked.nextElementSibling.classList.toggle(
              "header__links-sub--active"
            );
          }
        });
      }
      
    });


// TODO: Implementing menu fade animation

const nav = document.querySelector('nav');
const logo = document.querySelector('.header__logo');

header.addEventListener('mouseover', function(e){
  console.log(e.target);
  if (e.target.classList.contains('nav-fade')){
    const link = e.target;
    link.forEach(el => {

    })
  }
})







