// ==================================
// CARACHURE INKS
// EDITORIAL SCRIPT
// ==================================


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const section = document.querySelector(
            this.getAttribute("href")
        );

        if(section){

            e.preventDefault();

            section.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});





// Header background on scroll

const header = document.querySelector("header");


window.addEventListener("scroll", ()=>{


    if(window.scrollY > 80){

        header.style.background =
        "rgba(8,8,8,.95)";

    }

    else{

        header.style.background =
        "linear-gradient(to bottom,rgba(8,8,8,.85),transparent)";

    }


});






// Fade reveal animations


const revealItems = document.querySelectorAll(
    ".artist, .speciality, .photo, .bookingInner, .processGrid div, .instagram, .contact"
);



const revealObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }


    });


},{

    threshold:.15

});



revealItems.forEach(item=>{

    item.classList.add("fade");

    revealObserver.observe(item);

});







// Portfolio image viewer


const images = document.querySelectorAll(".photo img");


images.forEach(image=>{


    image.addEventListener("click",()=>{


        const viewer = document.createElement("div");


        viewer.className="imageViewer";


        viewer.innerHTML=`

            <img src="${image.src}">

        `;


        document.body.appendChild(viewer);



        viewer.addEventListener("click",()=>{

            viewer.remove();

        });


    });


});
