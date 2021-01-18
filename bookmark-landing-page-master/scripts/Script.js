const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".nav__menu");
const tabs = document.querySelectorAll(".slider__tab");
const questions = document.querySelectorAll(".accordion__item");

const image = document.querySelector("#imageFeature");
const header = document.querySelector("#headerFeature");
const paragraph = document.querySelector("#paragraphFeature");
const button = document.querySelector("#buttonFeature");
const featureDescription = document.querySelector(".slider__description");

const featureData = [
    {
        h1: "Bookmark in one click",
        p: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
        h1: "Intelligent search",
        p: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
        h1: "Share your bookmarks",
        p: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
]

const animateHamburger = () => hamburger.classList.toggle("open");
const animateNav = () => nav.classList.toggle('open');
const animateMenu = () => menu.classList.toggle('open');
const animateQuestion = (e) => e.target.classList.toggle("active");

hamburger.addEventListener("click", mobileNavigationAnimation);
questions.forEach((question) => question.addEventListener("click", accordionAnimation));
tabs.forEach((item) => item.addEventListener("click", animateSlider));


function mobileNavigationAnimation(){
    animateHamburger();
    animateNav();
    animateMenu();
    toggleOverflow();
}

function toggleOverflow(){
    document.querySelector("body").classList.toggle("oy-hidden");
    let htmlElement = document.querySelector("html");
    if(!htmlElement.style.overflow) htmlElement.style.overflow = "hidden";
    else htmlElement.style = "";
}

function animateSlider(e){
    if(isAlreadyActive(e)) return;
    animateTabs(e);
    changeUiData(e);
    leftToRightAnimation(image);
    leftToRightAnimation(featureDescription);
}

function accordionAnimation(e){
    animateQuestion(e);
    collapseAnswer(e);
}

function collapseAnswer(e){
    const li = e.target;
    const answer = li.querySelector(".accordion__answer");
    answer.classList.toggle("active");
    if(answer.classList.contains("active")) answer.style.maxHeight = "200px";
    else answer.style.maxHeight = "0";
}

function isAlreadyActive(e){
    return e.target.classList.contains("active");
}

function animateTabs(e){
    removeActiveClassesFromTabs();
    addActiveClassesToTabs(e);
}

function addActiveClassesToTabs(event){
    event.target.classList.add("active");
}

function removeActiveClassesFromTabs(){
    tabs.forEach((item) => item.classList.remove("active"));
}

function changeUiData(event){
    const id = parseInt(event.target.id);
    image.src = `/images/illustration-features-tab-${id + 1}.svg`;
    image.alt = `${featureData[id].h1} image`;
    header.textContent = featureData[id].h1;
    paragraph.textContent = featureData[id].p;
}

function leftToRightAnimation(element){
    const duration = 400;
    element.style.animation = `leftToRight ${duration}ms forwards linear`;

    setTimeout(function(){
        element.style = "";
    }, duration)
}

