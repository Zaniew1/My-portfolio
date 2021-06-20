const navWrapper = document.querySelector('.nav__bar');
const navToggle = document.querySelector('.nav__toggle');
navToggle.addEventListener("click", ()=>{
    navWrapper.classList.toggle('nav__bar--active')
    navToggle.classList.toggle('nav__toggle--active')
})






document.querySelector(".footer__go-up").addEventListener('click', ()=>{           
    const scrollTop = window.setInterval(function() {
        const topPosition = window.pageYOffset;
        if ( topPosition > 0 ) 
        {
            window.scrollTo( 0, topPosition - 20 ); 
        } 
        else 
        {
            window.clearInterval( scrollTop );
        }
    }, ); 
    })
    