const navWrapper = document.querySelector('.nav__bar');
const navToggle = document.querySelector('.nav__toggle');
navToggle.addEventListener("click", ()=>{
    navWrapper.classList.toggle('nav__bar--active')
    navToggle.classList.toggle('nav__toggle--active')
})






document.querySelector(".footer__go-up").addEventListener('click', ()=>{           
    const scrollTop = window.setInterval(function() {
        const topPosition = window.offsetTop;
            window.scrollTo( 0, topPosition - 20 ); 
            window.clearInterval( scrollTop );
    },6 ); 
    })
    const removeNav = ()=>{
        navWrapper.classList.remove('nav__bar--active')
        navToggle.classList.remove('nav__toggle--active')
    }


    document.querySelector("#home").addEventListener('click', ()=>{           
        const scrollToHome = window.setInterval(function() {
            const topPosition = document.querySelector('.indexWrapper').offsetTop;
            window.scrollTo( 0, topPosition -20 ); 
            window.clearInterval( scrollToHome );
            removeNav();
         
        },6 ); 
        })
    document.querySelector("#about").addEventListener('click', ()=>{           
            const scrollToAbout = window.setInterval(function() {
                const topPosition = document.querySelector('.about').offsetTop;
                window.scrollTo( 0, topPosition -20 ); 
                window.clearInterval( scrollToAbout );
                removeNav();
             
            },6 ); 
            })
    document.querySelector("#tech").addEventListener('click', ()=>{           
        const scrollToTech = window.setInterval(function() {
            const techPosition = document.querySelector('.tech').offsetTop;
            window.scrollTo( 0, techPosition -20 ); 
            window.clearInterval( scrollToTech );
            removeNav();
         
        },6 ); 
        })
    document.querySelector("#projects").addEventListener('click', ()=>{           
            const scrollToProjects = window.setInterval(function() {
                const projectsPosition = document.querySelector('.projects').offsetTop;
                window.scrollTo( 0, projectsPosition -20 ); 
                window.clearInterval( scrollToProjects );
                removeNav();
            
            },6 ); 
            })
    document.querySelector("#contact").addEventListener('click', ()=>{           
                const scrollToContact = window.setInterval(function() {
                    const contactPosition = document.querySelector('.contact').offsetTop;
                    window.scrollTo( 0, contactPosition -20 ); 
                    window.clearInterval( scrollToContact );
                    removeNav();
                
                },6 ); 
                })

document.querySelector(".front__button").addEventListener('click', ()=>{           
    const scrollToProjects = window.setInterval(function() {
        const projectsPosition = document.querySelector('.projects').offsetTop;
        window.scrollTo( 0, projectsPosition -20 ); 
        window.clearInterval( scrollToProjects );
        removeNav();
    
    },6 ); 
    })     