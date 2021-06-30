const navWrapper = document.querySelector('.nav__bar');
const navToggle = document.querySelector('.nav__toggle');
navToggle.addEventListener("click", ()=>{
    navWrapper.classList.toggle('nav__bar--active')
    navToggle.classList.toggle('nav__toggle--active')
})








    


    const navLinks = [...document.querySelectorAll('.nav__link')];
    const homePosition = document.querySelector('.indexWrapper').offsetTop;
    const aboutPosition = document.querySelector('.about').offsetTop;
    const techPosition = document.querySelector('.tech').offsetTop;
    const projectsPosition = document.querySelector('.projects').offsetTop;
    const contactPosition = document.querySelector('.contact').offsetTop;
    const lookMyProjects = document.querySelector(".front__button");
    const goUpButton = document.querySelector(".footer__go-up");

    const removeNav = ()=>{
        navWrapper.classList.remove('nav__bar--active')
        navToggle.classList.remove('nav__toggle--active')
    }


    navLinks.forEach((navLink, index ) =>{
        navLink.addEventListener('click', ()=>{

            if(index === 0){
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, homePosition - 20 ); 
                    window.clearInterval( scrollTo );          
                },6 ); 
            }

            else if(index === 1){
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, aboutPosition - 20 ); 
                    window.clearInterval( scrollTo );          
                },6 ); 
            }

            else if(index === 2){
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, techPosition - 20 ); 
                    window.clearInterval( scrollTo);          
                },6 ); 
            }

            else if(index === 3){
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, projectsPosition - 20 ); 
                    window.clearInterval( scrollTo );          
                },6 ); 
            }

            else {
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, contactPosition - 20 ); 
                    window.clearInterval( scrollTo);          
                },6 ); 
            }
            
            lookMyProjects.addEventListener('click', ()=>{  
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, projectsPosition - 20 ); 
                    window.clearInterval( scrollTo );          
                },6 ); 
            })

            goUpButton.addEventListener('click', ()=>{           
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, topPosition - 20 ); 
                    window.clearInterval( scrollTo );
                },6 ); 
                })

            removeNav();
        })
    })



    const homeLink = document.getElementById('home')        //przyciski navigacji w małych rozdzielczościach 
    const aboutLink = document.getElementById('about')
    const techLink = document.getElementById('tech')
    const projectsLink = document.getElementById('projects')
    const contactLink = document.getElementById('contact')

    const colorNavRemove = ()=>{                    //funkcja zabierająca jasny kolor z linków w navigacji na małych rozdzielczościach
        homeLink.classList.remove('color');
        aboutLink.classList.remove('color');
        techLink.classList.remove('color');
        projectsLink.classList.remove('color');
        contactLink.classList.remove('color');
    }

    const colorNavChange = ()=>{
        const topPosition = window.pageYOffset;
            if(topPosition <= aboutPosition){
                colorNavRemove();
                homeLink.classList.add('color');
            } else if(topPosition <= techPosition){
                colorNavRemove();
               aboutLink.classList.add('color');
            } else if(topPosition <= projectsPosition){
                colorNavRemove();
                techLink.classList.add('color');
            } else if(topPosition <= contactPosition){
                colorNavRemove();
                projectsLink.classList.add('color');
            } else {
                colorNavRemove();
                contactLink.classList.add('color');
            }
    }
    document.addEventListener('scroll', colorNavChange);