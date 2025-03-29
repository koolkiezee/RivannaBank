
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const menuOptions = document.querySelector(".menu-options");

    menuBtn.addEventListener("click", () => {
        menuOptions.classList.toggle("show-menu-options");
    });
});