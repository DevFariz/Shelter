// burger
const burgerBtn = document.querySelector(".burger-menu");
const burgerLines = document.querySelectorAll(".burger__line")
const menu = document.querySelector(".header-right");
const menuLinks = document.querySelectorAll(".menu__item-link");
const menuBg = document.querySelector(".fone");

function toggleMenu(){
    menu.classList.toggle("header-right_active");
    burgerBtn.classList.toggle("burger-menu_active");
    document.querySelector("body").classList.toggle("body_inactive");
    menuBg.classList.toggle("dark-bg");
}

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
        toggleMenu()
    })
})

document.addEventListener('click', (e) => {
    let targetEl = e.target;
    if(menu.classList.contains("header-right_active")){
        if(targetEl != menu){
            toggleMenu()
            return;
        }
    }
    burgerLines.forEach(burgerLine => {
        if(burgerLine == targetEl  || burgerBtn == targetEl){
            toggleMenu();
            return;
        }
    })
})
