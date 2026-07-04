document.addEventListener("DOMContentLoaded", () => {

    console.log("main.js cargado");

    // Menú hamburguesa (si existe)
    const burger = document.querySelector(".burgermenu");
    const menu = document.querySelector(".mainmenu");

    if (burger && menu) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("checked");
            menu.classList.toggle("checked");
            document.body.classList.toggle("menactive");
        });
    }

});