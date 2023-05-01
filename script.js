const nav = document.querySelector('.primary-nav');

const navToggle = document.querySelector('.mobile-nav');

const scrollElem = document.querySelector('#about');



// resets the form after submission

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  
}

scrollElem.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });


// handles closing and opening menu bar

function toggleHamburgerMenu() {
    navToggle.addEventListener('click', () => {
 
        const isVisible = nav.getAttribute('data-visible');
         
        if(isVisible === "false") {
            nav.setAttribute("data-visible", true);
            navToggle.setAttribute('aria-expanded', true);
        }
        else{
            nav.setAttribute("data-visible", false);
            navToggle.setAttribute('aria-expanded', false);
        }
      
    });
};


toggleHamburgerMenu();