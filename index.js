// burger bar
let burgerMenu = document.getElementById("burger-menu");
let navBlock = document.querySelector(".header-nav-block");
burgerMenu.addEventListener("click", setBugerMenu);

function setBugerMenu() {
  console.log("clkcc");
  navBlock.classList.toggle("activeNavigation");
}
