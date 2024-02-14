const navOpen = document.querySelector(".ri-menu-3-line")
const navClose = document.querySelector(".ri-close-fill")
const nav = document.querySelector("nav .ul-btn")

navOpen.addEventListener("click", function(){
    nav.style.top = "35%"
    navOpen.style.display = "none"
    navClose.style.display = "block"
})

navClose.addEventListener("click", function(){
    nav.style.top = "-35%"
    navClose.style.display = "none"
    navOpen.style.display = "block"
})
