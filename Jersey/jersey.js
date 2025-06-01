const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")

menuOpenButton.addEventListener("click", () => {
//toogle to show the menu
    document.body.classList.toggle("show-mobile-menu")
})

//toogle to hide the menu
menuCloseButton.addEventListener("click", () => 
menuOpenButton.click())