const navSlide = () => {

    // ovo je za dodavanje klasa u js
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    // kod za animaciju
    burger.addEventListener('click', ()=>{

        // ovo je da kada se stisne na gumb da se pozove ova klasa
        nav.classList.toggle('nav-active');

         // animirani linkovi
        navLinks.forEach((link, index) => {

        //animacija za linkove
        if(link.style.animation){
            link.style.animation = ''

        }  else {
            
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
       
    } )


    // burger animacija
    burger.classList.toggle('toggle');

    });

   

}

navSlide();