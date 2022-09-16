const $ = document.querySelector.bind(document);

const toggleMenu = (e) => {
  e.preventDefault();
  $("#menu").classList.toggle("active");
};

$("#menu-hamburger__open").addEventListener("click", toggleMenu);
$("#menu-hamburger___close").addEventListener("click", toggleMenu);
