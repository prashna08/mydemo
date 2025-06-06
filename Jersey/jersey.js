const navLinks = document.querySelectorAll(".nav-list .nav-link")
const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")

menuOpenButton.addEventListener("click", () => {
//toogle to show the menu
    document.body.classList.toggle("show-mobile-menu")
})

//toogle to hide the menu
menuCloseButton.addEventListener("click", () => 
menuOpenButton.click())

//toogle to hide the nav-bar when clicked on a link
navLinks.forEach(link =>{
    link.addEventListener("click", () => menuOpenButton.click());
})

//animation
window.addEventListener('scroll', animated);

function animated() {
    var animated = document.querySelectorAll('.animated');
    for (var i = 0; i < animated.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animated[i].getBoundingClientRect().top;
        var elementVisible = 130;

        if (elementTop < windowHeight - elementVisible) {
            animated[i].classList.add('active');
        } else {
            animated[i].classList.remove('active');
        }
    }
}


