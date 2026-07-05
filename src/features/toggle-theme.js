export function toggleTheme() {
  const elementHTML = document.documentElement;
  const elementButton = document.querySelector('.theme-toggle');
  const themedImages = document.querySelectorAll('[data-light-src]');

  elementButton.addEventListener('click', function () {
    const style = elementHTML.getAttribute('data-theme');

    if (style === 'light') {
      elementHTML.removeAttribute('data-theme');
      themedImages.forEach(function (img) {
        img.src = img.dataset.darkSrc;
      });
    } else {
      elementHTML.setAttribute('data-theme', 'light');
      themedImages.forEach(function (img) {
        img.src = img.dataset.lightSrc;
      });
    }
  });
}

toggleTheme();