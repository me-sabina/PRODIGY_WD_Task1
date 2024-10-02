// Changing navbar background color

window.addEventListener('scroll',function(){
    const navbar= document.querySelector('.navbar');
    if (window.scrollY > 10){               //if scrolled down 50px down the page

        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }

});
