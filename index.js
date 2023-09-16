// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
const sideBar = document.getElementById("side-bar");
const section = document.querySelector(".content");

let sideBarOpen = true;

btn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
});

section.addEventListener('click', () => {
    sideBar.classList.remove('active');
});