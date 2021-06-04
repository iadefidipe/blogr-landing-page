'Use strict'

// TODO: declaring variables

const btnHamburger = document.getElementById('btnHamburger')
const header = document.querySelector('.header')



btnHamburger.addEventListener('click', function(){

    if (header.classList.contains('open')){
        header.classList.remove('open')
    } else{
        header.classList.add('open');
    }
    


})