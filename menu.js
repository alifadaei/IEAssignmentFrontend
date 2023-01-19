function toggleMenu() {
  document.querySelector(".menu-content").classList.toggle("hidden");
}

document.querySelector(".close_").onclick = toggleMenu;
document.querySelector(".menu-humberger").onclick = toggleMenu;

document.querySelector("#link_start").onclick = function () {
  toggleMenu();
  document.querySelector("header").scrollIntoView({ behavior: "smooth" });
};
document.querySelector("#link_lectures").onclick = function () {
  toggleMenu();
  document.querySelector("#lectures").scrollIntoView({ behavior: "smooth" });
};
document.querySelector("#link_books").onclick = function () {
  toggleMenu();
  document.querySelector("#books").scrollIntoView({ behavior: "smooth" });
};
