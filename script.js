// ==================================
// CARACHURE INKS
// SCRIPT.JS
// ==================================


// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});





// Reveal animations on scroll


const revealElements = document.querySelectorAll(
    ".title, .aboutImage, .aboutText, .feature, .item, .specialtyCard, .bookingBox, .instagramBox, .contactBox"
);



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{

    threshold:.15

});



revealElements.forEach(element=>{

    element.classList.add("hidden");

    observer.observe(element);

});






// Navbar background change while scrolling


const nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        nav.style.background="rgba(0,0,0,.9)";

    }

    else{

        nav.style.background="rgba(0,0,0,.65)";

    }


});






// Gallery image click effect


const galleryImages = document.querySelectorAll(".item img");


galleryImages.forEach(image=>{


    image.addEventListener("click",()=>{


        image.classList.toggle("zoom");


    });


});
