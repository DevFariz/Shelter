// burger
const burgerBtn = document.querySelector(".burger-menu");
const burgerLines = document.querySelectorAll(".burger__line")
const menu = document.querySelector(".header-right");
const menuLinks = document.querySelectorAll(".menu__item-link");
const menuBg = document.querySelector(".fone");
const header = document.querySelector(".header")

function toggleMenu(){
    menu.classList.toggle("header-right_active");
    burgerBtn.classList.toggle("burger-menu_active");
    document.querySelector("body").classList.toggle("body_inactive");
    menuBg.classList.toggle("dark-bg");
    header.classList.toggle("header_inactive")
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
});

const pageContainer = document.querySelector(".our-friends__container")
const btnFirst = document.getElementById("btn-first");
const btnPrev = document.getElementById("btn-prev");
const btnActive = document.getElementById("btn-active");
const btnNext = document.getElementById("btn-next");
const btnLast = document.getElementById("btn-last");


const [screen, tablet, mobile] = [8, 6, 3];
let media = screen;
let oldMedia = screen;
const wWidth = window.innerWidth;

if (wWidth > 1280) {
    media = screen;
} else if (wWidth > 767) {
    media = tablet;
} else {
    media = mobile;
}

const pages = new Pages(pageContainer, btnActive);

pages.setMaxPages(media);
pages.showCurrentPage();

window.addEventListener("resize", () => {

    const wWidth = window.innerWidth;

    if(wWidth > 1280){
        media = screen;

    }else if (wWidth > 767){
        media = tablet;
    }else{
        media = mobile;
    }
    
    if(media != oldMedia){
        oldMedia = media;
        pages.setMaxPages(media)
        pages.showCurrentPage();
        if(pages.currentPage < pages.maxPages){
            enabledNexts()
        }
        
    }
   
})


btnFirst.addEventListener('click', (e) => {

    if(pages.currentPage > 1){
        pages.toFirst();
        enabledNexts()
    }

    if(pages.currentPage == 1){
        disabledPrevs()
    }
})

btnPrev.addEventListener('click', () => {

    if(pages.currentPage > 1){
        pages.prev();
        enabledNexts()
    }

    if(pages.currentPage == 1){
        disabledPrevs()
    }
})

btnNext.addEventListener('click', () => {

    if(pages.currentPage < pages.maxPages){
        pages.next();
        enabledPrevs()
    }

    if(pages.currentPage == pages.maxPages){
        disabledNexts()
    }
    
})

btnLast.addEventListener('click', (e) => {
    if(pages.currentPage < pages.maxPages){
        pages.toLast();
        enabledPrevs()
    }

    if(pages.currentPage == pages.maxPages){
        disabledNexts()
    }
})


function disabledPrevs(){
    btnFirst.classList.remove("btn_abled")
    btnFirst.classList.add("btn_disabled")
    btnPrev.classList.remove("btn_abled")
    btnPrev.classList.add("btn_disabled")
} 

function enabledPrevs(){
    btnFirst.classList.remove("btn_disabled")
    btnFirst.classList.add("btn_abled")
    btnPrev.classList.remove("btn_disabled")
    btnPrev.classList.add("btn_abled")
} 

function disabledNexts(){
    btnLast.classList.remove("btn_abled")
    btnLast.classList.add("btn_disabled")
    btnNext.classList.remove("btn_abled")
    btnNext.classList.add("btn_disabled")
} 

function enabledNexts(){
    btnLast.classList.remove("btn_disabled")
    btnLast.classList.add("btn_abled")
    btnNext.classList.remove("btn_disabled")
    btnNext.classList.add("btn_abled")
} 