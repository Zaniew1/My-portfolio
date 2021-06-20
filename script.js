const navWrapper = document.querySelector('.nav__bar');
const navToggle = document.querySelector('.nav__toggle');
navToggle.addEventListener("click", ()=>{
    navWrapper.classList.toggle('enable')
    navToggle.classList.toggle('nav__toggle--active')
})
