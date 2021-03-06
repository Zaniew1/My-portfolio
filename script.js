const nav = document.querySelector('.nav')
const navWrapper = document.querySelector('.nav__bar');
const navToggle = document.querySelector('.nav__toggle');
navToggle.addEventListener("click", ()=>{
    navWrapper.classList.toggle('nav__bar--active')         //funkcja otwiera i zamyka navbar po naciśnięciu ikony burgera
    navToggle.classList.toggle('nav__toggle--active')
})



window.addEventListener("scroll", () =>{
    if(window.innerWidth >= 768 && window.innerHeight >= 500)
    {                                                                           // kod rozwijający małe menu po scrollu użytkownika 
        if(window.pageYOffset >= 1 )                                            // włącz po najmniejszym scrollu 
        {
            document.querySelector('.nav__bar').classList.add('nav__bar--sticky-big-screen')
        }
        else                                                                           // wyłącz kiedy jest na górze
        {
            document.querySelector('.nav__bar').classList.remove('nav__bar--sticky-big-screen')
    

        }
    }
})




    const navLinks = [...document.querySelectorAll('.nav__link')];                  // wszystkie linki w nawigacji - jako tablica
    const homePosition = document.querySelector('.main').offsetTop;         // górna krawędź sekcji home
    const aboutPosition = document.querySelector('.about').offsetTop;               // górna krawędź sekcji about
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
                    window.scrollTo( 0, homePosition); 
                    window.clearInterval( scrollTo );          
                },); 
            }

            else if(index === 1){
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, aboutPosition); 
                    window.clearInterval( scrollTo );          
                },); 
            }
            else if(index === 2){
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, projectsPosition); 
                    window.clearInterval( scrollTo );          
                },); 
            }

            else if (index === 3) {
                const scrollTo = window.setInterval(function(){
                    window.scrollTo( 0, contactPosition); 
                    window.clearInterval( scrollTo);          
                },); 
            }
            
           

            removeNav();        // funkcja chowająca nawigację po naciśnięciu jakiegokolwiek linka 
        })
    })
    lookMyProjects.addEventListener('click', ()=>{              //funkcja scrollująca do projektów po naciśnięciu buttona "zobacz moje projekty"
        const scrollTo = window.setInterval(function(){
            window.scrollTo( 0, projectsPosition - 20 ); 
            window.clearInterval( scrollTo );          
        },6 ); 
    })

    goUpButton.addEventListener('click', ()=>{                      //funkcja scrollująca do projektów po naciśnięciu buttona - strzałka do góry
        const scrollTo = window.setInterval(function(){
            window.scrollTo( 0, homePosition - 20 ); 
            window.clearInterval( scrollTo );
        },6 ); 
        })


    const homeLink = document.getElementById('home')        //przyciski navigacji w małych rozdzielczościach 
    const aboutLink = document.getElementById('about')
    const projectsLink = document.getElementById('projects')
    const contactLink = document.getElementById('contact')

    const colorNavRemove = ()=>{                    //funkcja zabierająca jasny kolor z linków w navigacji na małych rozdzielczościach
        homeLink.classList.remove('nav__link--color');
        aboutLink.classList.remove('nav__link--color');
        projectsLink.classList.remove('nav__link--color');
        contactLink.classList.remove('nav__link--color');
    }

    const colorNavChange = ()=>{            // funkcja dająca kolor linkom w nawigacji zależnie od miejsca w którym jesteśmy na stronie 
        const topPosition = window.pageYOffset;             // na jakiej wysokości obecnie jest krawędź górnego ekranu
        const navHeight = document.querySelector('.nav__bar').clientHeight;     // wysokość nav baru 
            if(topPosition <= (aboutPosition - navHeight)){         // jeżeli górna krawędź ekranu jest między górą dokumentu a miejscem w którym się zaczyna sekcja about (minus wysokość navbaru)
                colorNavRemove();                                   // przed każdym nadaniem koloru danemu linkowi, zerujemy wszystkie linki, aby nie było dwóch naraz 
                homeLink.classList.add('nav__link--color');
            } else if(topPosition <= (projectsPosition- navHeight)){
                colorNavRemove();
               aboutLink.classList.add('nav__link--color');
            } else if(topPosition <= (contactPosition - navHeight)){
                colorNavRemove();
                projectsLink.classList.add('nav__link--color');
            } else {
                colorNavRemove();
                contactLink.classList.add('nav__link--color');
            }
    }
    document.addEventListener('scroll', colorNavChange);            // wywołanie na scrollu




    const allProjects = document.querySelector('.projects__name--one')
    const htmlCssProjects = document.querySelector('.projects__name--two')
    const jsProjects = document.querySelector('.projects__name--three')
    const reactProjects = document.querySelector('.projects__name--four')

    // FUNKCJA ZABIERAJĄCA KOLOR Z POSZCZEGOLNYCH DIVÓW: HTML, JS, REACT W SEKCJI PROJECTS 
    const removeRedColor = ()=>{
        allProjects.classList.remove('projects__name--active-color');
        htmlCssProjects.classList.remove('projects__name--active-color');
        jsProjects.classList.remove('projects__name--active-color');
        reactProjects.classList.remove('projects__name--active-color');
    }

    allProjects.addEventListener('click' , () => {
        removeRedColor();
        allProjects.classList.add('projects__name--active-color');
    })

    htmlCssProjects.addEventListener('click' , () => {
        removeRedColor();
        htmlCssProjects.classList.add('projects__name--active-color');
    })
    
    jsProjects.addEventListener('click' , () => {
        removeRedColor();
        jsProjects.classList.add('projects__name--active-color');
    })

    reactProjects.addEventListener('click' , () => {
        removeRedColor();
        reactProjects.classList.add('projects__name--active-color');
    })
    // ROZMYCIE STRONY
    const blur = document.querySelector('.blur')

// OTWORZENIE PROJEKTU
// TABLICA Z WSZYSTKIMI BUTTONAMI 
const projectMore = [...document.querySelectorAll('.projects__learn-more')];
// TABLICA Z WSZYSTKIMI PROJEKTAMI
const projectShow =  [...document.querySelectorAll('.project__full')];

projectMore.forEach((project, index) => {
    // TU JEST USTAWIONY EVEN LISTENER NA KAŻDYM BUTTONIE, DAJE INDEX TEGO BUTTONA,
    // A NASTĘPNIE NADAJE KLASĘ DLA PROJECT__FULL Z INDEXEM BUTTONA,
    // ABY OTWORZYĆ KONKRETNY PROJECT 
    project.addEventListener('click', ()=> {
    projectShow[index].classList.add('project__full--display-block');
    blur.classList.add('blur--active');
    nav.classList.add('nav--active');
    
    })
})


// ZDJĘCIA POSZCZEGÓLNYCH PROJEKTÓW 
    const slideList = ["img/brows.jpg", "img/brows2.jpg", "img/brows4.jpg"]
    const slideList1 = ["img/mz1.jpg", "img/mz2.jpg",]
    const slideList2 = ["img/soon2.jpg"]
    const slideList3 = ["img/soon.jpg"]
    const slideList4 = ["img/soon.jpg"]
    const slideList5 = ["img/soon.jpg"]
    const slideList6 = ["img/soon2.jpg"]
    const slideList7 = ["img/soon2.jpg"]
    const slideList8 = ["img/soon2.jpg"]
    
 
    let active = 0;
    const sliderPicture = [...document.querySelectorAll('.project__slider')];
    const leftArrow = document.querySelector('.project__arrow-icon--left');
    const rightArrow = document.querySelector('.project__arrow-icon--right');


// ZMIENIANIE SLAJDÓW ZA POMOCĄ STRZŁAŁEK
document.querySelectorAll(".project__arrow-icon--right").forEach((arrow, index) => arrow.addEventListener('click', ()=>{
    active++;
    if(index === 0)
    {   
        const slidePictureWithIndex = sliderPicture[0]
        const slideListWithIndex = slideList
        if(active === slideListWithIndex.length){
            active = 0;
        }
        slidePictureWithIndex.src = slideListWithIndex[active] 
    }
    else if(index == 1)
    {
        const slidePictureWithIndex = sliderPicture[1]
        const slideListWithIndex = slideList1
 
        if(active === slideListWithIndex.length){
            active = 0;
        }
        slidePictureWithIndex.src = slideListWithIndex[active] 
    }
    else if(index === 2)
    {
        const slidePictureWithIndex = sliderPicture[2]
        const slideListWithIndex = slideList2
        if(active === slideListWithIndex.length){
            active = 0;
        }
        slidePictureWithIndex.src = slideListWithIndex[active] 
    }
    else if(index === 3)
    {
        const slidePictureWithIndex = sliderPicture[3]
        const slideListWithIndex = slideList3
        if(active === slideListWithIndex.length){
            active = 0;
        }
        slidePictureWithIndex.src = slideListWithIndex[active] 
    }
    else if(index === 4)
    {
        const slidePictureWithIndex = sliderPicture[4]
        const slideListWithIndex = slideList4
        if(active === slideListWithIndex.length){
            active = 0;
        }
        slidePictureWithIndex.src = slideListWithIndex[active] 
    }
    else if(index === 5)
    {
        const slidePictureWithIndex = sliderPicture[5]
        const slideListWithIndex = slideList5
        if(active === slideListWithIndex.length){
            active = 0;
        }
        slidePictureWithIndex.src = slideListWithIndex[active] 
    }
    else if(index === 6)
    {
        const slidePictureWithIndex = sliderPicture[6]
        const slideListWithIndex = slideList6
        if(active === slideListWithIndex.length){
            active = 0;
        }
        slidePictureWithIndex.src = slideListWithIndex[active] 
    }
    else if(index === 7)
    {
        const slidePictureWithIndex = sliderPicture[7]
        const slideListWithIndex = slideList7
        if(active === slideListWithIndex.length){
            active = 0;
        }
        slidePictureWithIndex.src = slideListWithIndex[active] 
    }
   else{
        const slidePictureWithIndex = sliderPicture[8]
        const slideListWithIndex = slideList8
        if(active === slideListWithIndex.length){
            active = 0;
        }
        slidePictureWithIndex.src = slideListWithIndex[active] 
   }
}))



document.querySelectorAll(".project__arrow-icon--left").forEach((arrow, index) => arrow.addEventListener('click', ()=>{
    active--;
    if(index === 0)
    {   
        const slidePictureWithIndex = sliderPicture[0]
        const slideListWithIndex = slideList
        if(active < 0){
            active =  slideListWithIndex.length - 1;   
        }
        slidePictureWithIndex.src = slideListWithIndex[active]
    }
    else if(index == 1)
    {
        const slidePictureWithIndex = sliderPicture[1]
        const slideListWithIndex = slideList1
        if(active < 0){
            active =  slideListWithIndex.length - 1;   
        }
        slidePictureWithIndex.src = slideListWithIndex[active]
    }
    else if(index === 2)
    {
        const slidePictureWithIndex = sliderPicture[2]
        const slideListWithIndex = slideList2
        if(active < 0){
            active =  slideListWithIndex.length - 1;   
        }
        slidePictureWithIndex.src = slideListWithIndex[active]
    }
    else if(index === 3)
    {
        const slidePictureWithIndex = sliderPicture[3]
        const slideListWithIndex = slideList3
        if(active < 0){
            active =  slideListWithIndex.length - 1;   
        }
        slidePictureWithIndex.src = slideListWithIndex[active]
    }
    else if(index === 4)
    {
        const slidePictureWithIndex = sliderPicture[4]
        const slideListWithIndex = slideList4
        if(active < 0){
            active =  slideListWithIndex.length - 1;   
        }
        slidePictureWithIndex.src = slideListWithIndex[active]
    }
    else if(index === 5)
    {
        const slidePictureWithIndex = sliderPicture[5]
        const slideListWithIndex = slideList5
        if(active < 0){
            active =  slideListWithIndex.length - 1;   
        }
        slidePictureWithIndex.src = slideListWithIndex[active]
    }
    else if(index === 6)
    {
        const slidePictureWithIndex = sliderPicture[6]
        const slideListWithIndex = slideList6
        if(active < 0){
            active =  slideListWithIndex.length - 1;   
        }
        slidePictureWithIndex.src = slideListWithIndex[active]
    }
    else if(index === 7)
    {
        const slidePictureWithIndex = sliderPicture[7]
        const slideListWithIndex = slideList7
        if(active < 0){
            active =  slideListWithIndex.length - 1;   
        }
        slidePictureWithIndex.src = slideListWithIndex[active]
    }
   else{
        const slidePictureWithIndex = sliderPicture[8]
        const slideListWithIndex = slideList8
        if(active < 0){
            active =  slideListWithIndex.length - 1;   
        }
        slidePictureWithIndex.src = slideListWithIndex[active]
   }
}))

   

    








// ZAMKNIĘCIE PROJEKTU
const turnOffProject = function(){
    [...document.querySelectorAll('.project__full')].forEach(project => project.classList.remove('project__full--display-block'));
    blur.classList.remove('blur--active');
    nav.classList.remove('nav--active');
    active = 0;
}

blur.addEventListener('click', ()=>{
    active = 0;
    blur.classList.remove('blur--active');
    nav.classList.remove('nav--active');
    [...document.querySelectorAll('.project__full')].forEach(project => project.classList.remove('project__full--display-block'));
})




// Funkcje filtrujące projekty przez przyciśnięcie odpowiedniego przycisku w sekcji projects
const showAllProject = function(){
    document.querySelectorAll('.project__css').forEach(project => project.classList.remove('projects__project--hide'))
    document.querySelectorAll('.project__js').forEach(project => project.classList.remove('projects__project--hide'))
    document.querySelectorAll('.project__react').forEach(project => project.classList.remove('projects__project--hide'))
}
const showCssProject = function(){
    document.querySelectorAll('.project__css').forEach(project => project.classList.remove('projects__project--hide'))
    document.querySelectorAll('.project__js').forEach(project => project.classList.add('projects__project--hide'))
    document.querySelectorAll('.project__react').forEach(project => project.classList.add('projects__project--hide'))
}
const showJsProject = function(){
    document.querySelectorAll('.project__js').forEach(project => project.classList.remove('projects__project--hide'))
    document.querySelectorAll('.project__css').forEach(project => project.classList.add('projects__project--hide'))
    document.querySelectorAll('.project__react').forEach(project => project.classList.add('projects__project--hide'))
}

const showReactProject = function(){
    document.querySelectorAll('.project__react').forEach(project => project.classList.remove('projects__project--hide'))
    document.querySelectorAll('.project__css').forEach(project => project.classList.add('projects__project--hide'))
    document.querySelectorAll('.project__js').forEach(project => project.classList.add('projects__project--hide')) 
}

// ANIMACJE SLIDE IN NA SCROLLU

document.addEventListener('scroll', ()=>{
    // ANIMACJE TYLKO NA WIĘKSZYCH EKRANACH
    if(window.innerWidth >= 1024 )
    {
        // WARTOŚCI OKNA PRZEGLĄDARKI: 
        // WARTOŚĆ SCROLLA (GÓRNA LINIA OKNA)
        const windowScrollValue = window.scrollY;
        // WYSOKOŚĆ OKNA PRZEGLĄDARKI
        const windowHeight = window.innerHeight;

        // ANIMACJA HEADERU W SEKSCJI ABOUT
        const aboutH2 = document.querySelector('.about__h2');
        // WYSOKOŚĆ ELEMENTU HEADER
        const aboutHeaderHeight = document.querySelector('.about__header').offsetHeight;
        // ODLEGŁOŚĆ ELEMENTU OD GORY OKNA PRZEGLĄDARKI
        const distanceAboutH2FromTop = aboutH2.offsetTop;
        // WARTOŚĆ SCROLLA POWINNA BYĆ WIĘKSZA OD (ODLEGŁOŚCI ELEMENTU OD GORY OKNA PRZEGLĄDARKI - WYSOKOŚĆ OKNA PRZEGLĄDARKI + WYSOKOŚĆ TEGO ELEMENTU)
        if(windowScrollValue > distanceAboutH2FromTop - windowHeight + aboutHeaderHeight ){
            aboutH2.classList.add('about__h2--animate');   
        }
        // ANIMACJA 6 KĄTÓW W SEKCJI ABOUT
        const sixAngles = [...document.querySelectorAll('.about__six-angles')]
        const aboutWrap = document.querySelector('.about__wrap')
        const aboutWrapHeight = aboutWrap.offsetHeight;
        const distanceSixAnglesFromTop = aboutWrap.offsetTop;
        if(windowScrollValue > distanceSixAnglesFromTop - windowHeight + aboutWrapHeight ){
            sixAngles.forEach(angle => angle.classList.add('about__six-angles--animate'));
            // OPÓŹNIANIE ANIMACJI 
            sixAngles.forEach((angle, index) => {
                let seconds = index/3;
                angle.style.transitionDelay = `${seconds}s`;
            })
        }
        // ANIMACJA NAGŁÓWKÓW I OPISÓW POD 6-KĄTAMI W SEKCJI ABOUT
        const aboutCaption = [...document.querySelectorAll('.about__caption')];
        const aboutDescription = [...document.querySelectorAll('.about__description')];
        if(windowScrollValue > distanceSixAnglesFromTop - windowHeight + aboutWrapHeight + 100 ){
            aboutCaption.forEach(caption => caption.classList.add('about__caption--animate'))
            // OPÓŹNIANIE ANIMACJI 
            aboutCaption.forEach((caption, index) => {
                let seconds = index/4;
                caption.style.transitionDelay = `${seconds}s`;
            })
            aboutDescription.forEach(description => description.classList.add('about__description--animate'))
            aboutDescription.forEach((description, index) => {
                let seconds = index/4;
                description.style.transitionDelay = `${seconds}s`;
            })
        }
        // ANIMACJA KIM JESTEM W SEKCJI ABOUT
        const whoAmI = document.querySelector('.about__text-wrap');
        const whoAmIWrapper = document.querySelector('.about__wrapper').offsetHeight;
        const distanceWhoAmIFromTop = whoAmI.offsetTop;
        if(windowScrollValue > distanceWhoAmIFromTop - windowHeight + whoAmIWrapper ){
            whoAmI.classList.add('about__text-wrap--animate');

        }
        // ANIMACJA HEADERU W SEKCJI PROJECTS
        const projectsH2 = document.querySelector('.projects__h2');
        const projectsHeader = document.querySelector('.projects__header').offsetHeight;
        const distanceProjectsH2FromTop = projectsH2.offsetTop;
        if(windowScrollValue > distanceProjectsH2FromTop - windowHeight + projectsHeader ){
            projectsH2.classList.add('projects__h2--animate');
        }

        // ANIMACJA MENU WYBORU TECHNOLOGII W SEKCJI PROJECTS
        const projectsName = [...document.querySelectorAll('.projects__name')];
        const projectsSearch = document.querySelector('.projects__search')
        const projectsSearchHeight = projectsSearch.offsetHeight;
        const distanceProjectsSearchFromTop = projectsSearch.offsetTop;
        if(windowScrollValue > distanceProjectsSearchFromTop - windowHeight + projectsHeader + projectsSearchHeight ){
            projectsName.forEach(name => name.classList.add('projects__name--animate'));
        }
        // ANIMACJA PROJEKTÓW W SEKCJI PROJECTS
        const projectsProject = [...document.querySelectorAll('.projects__project')];
        const firstProject = document.querySelector('.projects__project');
        const firstProjectHeight = firstProject.offsetHeight;
        const distanceFirstProjectFromTop = firstProject.offsetTop;
        if(windowScrollValue > distanceFirstProjectFromTop - windowHeight  + firstProjectHeight ){
            projectsProject.forEach(project => project.classList.add('projects__project--animate'));
            // OPÓŹNIANIE ANIMACJI 
            projectsProject.forEach((project, index) => {
                let seconds = index/20;
                project.style.transitionDelay = `${seconds}s`;
            })
        }
        // ANIMACJA HEADERA W SEKCJI CONTACT
        const contactH2 = document.querySelector('.contact__h2');
        const contactHeaderHeight = document.querySelector('.contact__header').offsetHeight;
        const distanceContactH2FromTop = contactH2.offsetTop;
        if(windowScrollValue > distanceContactH2FromTop - windowHeight + contactHeaderHeight ){
            contactH2.classList.add('contact__h2--animate');
        }
        // ANIMACJA "JEŻELI MASZ PYTANIA" W SEKCJI CONTACT
        const contactAsk = document.querySelector('.contact__form-header');
        const contactAskHeight = document.querySelector('.contact__form-header').offsetHeight;
        const distanceContactAskFromTop = contactAsk.offsetTop;
        if(windowScrollValue > distanceContactAskFromTop - windowHeight + contactAskHeight ){
            contactAsk.classList.add('contact__form-header--animate');
        }
        // ANIMACJA INPUTÓW W SEKCJI CONTACT
        const contactInputs = [...document.querySelectorAll('.contact__input')];
        const contactTextArea = document.querySelector('.contact__text');
        const contactTextAreaHeight = contactTextArea.offsetHeight;
        const distanceContactTextAreaFromTop = contactTextArea.offsetTop;
        if(windowScrollValue > distanceContactTextAreaFromTop - windowHeight + contactTextAreaHeight ){
            contactInputs.forEach(input=> input.classList.add('contact__input--animate'));
            contactTextArea.classList.add('contact__text--animate');
        }
        // ANIMACJA SUBMITA W SEKCJI CONTACT
        const contactSubmit = document.querySelector('.contact__submit');
        const contactSubmitHeight = contactSubmit.offsetHeight;
        const distanceContactSubmitFromTop = contactSubmit.offsetTop;
        if(windowScrollValue > distanceContactSubmitFromTop - windowHeight + (contactSubmitHeight * 2) ){
            contactSubmit.classList.add('contact__submit--animate');
        }
    }
})












// ANIMACJA TEKSTU W SEKCJI FRONT 
const containerTextH2 = document.querySelector('.front__text-h2');
const h2Text = 'Junior Front-End Developer ';
const timeOfAnimationH2 = 70;
const timeOfH2AnimationDelay = 1000
let indexTextH2 = 0;
// JEŻELI SZEROKOŚĆ EKRANU POWYŻEJ 768PX TO ZANIMUJ 
if(window.innerWidth >= 768){
    // OPÓŹNIENIE ANIMACJI O 1 SEKUNDĘ 
    const letterH2AnimationDelay = ()=>{
        const letterH2Animation = ()=>{
        containerTextH2.textContent += h2Text[indexTextH2 ];
        indexTextH2 ++
        if(indexTextH2  === h2Text.length) {
            clearInterval(indexH2Typing);
        }}
        const indexH2Typing = setInterval(letterH2Animation, timeOfAnimationH2)
        clearInterval(indexH2Delay);
    }
    const indexH2Delay = setInterval(letterH2AnimationDelay, timeOfH2AnimationDelay)
}
// JEŻELI SZEROKOŚĆ EKRANU PONIŻEJ 768PX TO USTAW TEXTCONTENT NA DOMYŚLNY NAPIS 
else
{
    containerTextH2.textContent =  h2Text
}