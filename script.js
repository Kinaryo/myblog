const navbarnav = document.querySelector(".nav-nav");
// ketika menu di klik

document.querySelector("#menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilang navnya

const menu = document.querySelector("#menu");

// ketika dokumenya diketik dimanapun dihalaman
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
