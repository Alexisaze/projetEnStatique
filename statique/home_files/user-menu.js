alert('bibi');
// Selection du DOM
const userBox = document.querySelector(".Header-userMenu");
console.log("Test userBox", userBox)
const userIcon = document.querySelector(".Header-userMenu-avatar");
console.log("test userIcon", userIcon)

// Ecouteur de clic sur icon:
userIcon.addEventListener("click", () => {
    userBox.classList.toggle("open");
});

// showHideUser.addEventListener("click", function (event) {
//     const userLogin = document.querySelector(".usernav");
//     const showHideUser = document.querySelector(".showHideUser");

//     // Si le clic est à l'extérieur de usernav
//     if (!userLogin.contains(event.target)) {
//         userLogin.classList.remove("open");
//     }
// });
