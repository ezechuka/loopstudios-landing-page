const mobileMenu = document.getElementById("mobile-menu");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
})

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
})