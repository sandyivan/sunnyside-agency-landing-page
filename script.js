let hamburgerMenu = document.getElementById('myhamburger');
let mainMenu = document.querySelector("nav")

hamburgerMenu.addEventListener("click", () => {
    //console.log(mainMenu.classList);
    mainMenu.classList.toggle("hidden")
}  );

