const navWrapper = document.querySelector('.nav__bar');
const navToggle = document.querySelector('.nav__toggle');
navToggle.addEventListener("click", ()=>{
    navWrapper.classList.toggle('nav__bar--active')         //funkcja otwiera i zamyka navbar po naciśnięciu ikony burgera
    navToggle.classList.toggle('nav__toggle--active')
})

    const navLinks = [...document.querySelectorAll('.nav__link')];                  // wszystkie linki w nawigacji - jako tablica
    const homePosition = document.querySelector('.indexWrapper').offsetTop;         // górna krawędź sekcji home
    const aboutPosition = document.querySelector('.about').offsetTop;               // górna krawędź sekcji about
    const techPosition = document.querySelector('.tech').offsetTop;                 // górna krawędź sekcji tech
    const projectsPosition = document.querySelector('.projects').offsetTop;         // górna krawędź sekcji projects
    const contactPosition = document.querySelector('.contact').offsetTop;           // górna krawędź sekcji contact
    const lookMyProjects = document.querySelector(".front__button");                // button "zobacz moje projekty"
    const goUpButton = document.querySelector(".footer__go-up");                    // button zabierający na początek strony 

    const removeNav = ()=>{
        navWrapper.classList.remove('nav__bar--active')             // funkcja chowająca nawigację 
        navToggle.classList.remove('nav__toggle--active')
    }


    navLinks.forEach((navLink, index ) =>{
        navLink.addEventListener('click', ()=>{                 // funkcja scrollująca stronę do danej sekcji po naciśnięciu linka w nawigacji

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
            
            lookMyProjects.addEventListener('click', ()=>{              //funkcja scrollująca do projektów po naciśnięciu buttona "zobacz moje projekty"
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, projectsPosition - 20 ); 
                    window.clearInterval( scrollTo );          
                },6 ); 
            })

            goUpButton.addEventListener('click', ()=>{                      //funkcja scrollująca do projektów po naciśnięciu buttona - strzałka do góry
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, topPosition - 20 ); 
                    window.clearInterval( scrollTo );
                },6 ); 
                })

            removeNav();        // funkcja chowająca nawigację po naciśnięciu jakiegokolwiek linka 
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

    const colorNavChange = ()=>{            // funkcja dająca kolor linkom w nawigacji zależnie od miejsca w którym jesteśmy na stronie 
        const topPosition = window.pageYOffset;             // na jakiej wysokości obecnie jest krawędź górnego ekranu
        const navHeight = document.querySelector('.nav__bar').clientHeight;     // wysokość nav baru 
            if(topPosition <= (aboutPosition - navHeight)){         // jeżeli górna krawędź ekranu jest między górą dokumentu a miejscem w którym się zaczyna sekcja about (minus wysokość navbaru)
                colorNavRemove();                                   // przed każdym nadaniem koloru danemu linkowi, zerujemy wszystkie linki, aby nie było dwóch naraz 
                homeLink.classList.add('color');
            } else if(topPosition <= (techPosition - navHeight)){
                colorNavRemove();
               aboutLink.classList.add('color');
            } else if(topPosition <= (projectsPosition - navHeight)){
                colorNavRemove();
                techLink.classList.add('color');
            } else if(topPosition <= (contactPosition - navHeight)){
                colorNavRemove();
                projectsLink.classList.add('color');
            } else {
                colorNavRemove();
                contactLink.classList.add('color');
            }
    }
    document.addEventListener('scroll', colorNavChange);            // wywołanie na scrollu