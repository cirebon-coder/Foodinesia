const menu_btn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

menu_btn.onclick = () => {
  menu_btn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  document.querySelector(".header").classList.add("active");
  if (window.scrollY == 0) {
    document.querySelector(".header").classList.remove("active");
  }
};
