export function arrowScrollUp() {
  const buttonElement = document.querySelector('.footer__top')
  buttonElement.addEventListener('click', function () {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    })
  })
}

arrowScrollUp()