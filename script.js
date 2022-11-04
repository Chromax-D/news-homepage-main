let toggleOpen = document.getElementById("nav-open");
let toggleClose = document.getElementById("nav-close");
let menuBar = document.getElementById("nav-menu");

toggleOpen.addEventListener('click', ()=>{
    menuBar.style.left='0%';
})

toggleClose.addEventListener('click', ()=>{
    menuBar.style.left='100%';
})