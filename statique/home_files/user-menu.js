// Selection du DOM
const userLogin = document.querySelector(".usernav");
const showHideUser = document.querySelector(".showHideUser");

// Ecouteur de clic sur icon:
showHideUser.addEventListener("click", () => {
    userLogin.classList.toggle("open");
});

document.addEventListener("click", function (event) {
    const userLogin = document.querySelector(".usernav");
    const showHideUser = document.querySelector(".showHideUser");

    // Si le clic est à l'extérieur de usernav
    if (!userLogin.contains(event.target)) {
        userLogin.classList.remove("open");
    }
});
