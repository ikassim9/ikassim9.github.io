const nav = document.querySelector('.primary-nav');

const navToggle = document.querySelector('.mobile-nav');

navToggle.addEventListener('click', () => {
 
    const isVisible = nav.getAttribute('data-visible');
     
    if(isVisible === "false") {
        console.log(isVisible);
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else{
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute('aria-expanded', false);
    }
  
});