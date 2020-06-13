const navSlide = () => {
    const accordian = document.querySelector('.accordian');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll ('.nav-links li');

    
accordian.addEventListener('click', () => {

    //Toggle Nav
    nav.classList.toggle('nav-active');
    
    //Animate Links
    navLinks.forEach((link, index)=>{

        if(link.style.animation) {
            link.style.animation = '';
        } else {

            link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 1}s`;
        }
        
    });

    //accordian animation
    accordian.classList.toggle('toggle');
    
});

}

navSlide();