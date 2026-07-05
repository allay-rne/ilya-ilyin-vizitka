export function burger() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__nav");
  const navLinks = document.querySelectorAll(".header__link");
  const html = document.documentElement;

  if (burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      nav.classList.toggle("active");
      html.classList.toggle("is-lock");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        burger.classList.remove("active");
        nav.classList.remove("active");
        html.classList.remove("is-lock");
      });
    });
  }
}

burger();