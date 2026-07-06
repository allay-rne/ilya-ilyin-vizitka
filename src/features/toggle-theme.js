export function toggleTheme() {
  const elementHTML = document.documentElement;
  const elementButton = document.querySelector('.theme-toggle');
  const themedImages = document.querySelectorAll('[data-light-src]');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    elementHTML.setAttribute('data-theme', 'light');
    themedImages.forEach(function (img) {
      img.src = img.dataset.lightSrc;
    });
  }

  elementButton.addEventListener('click', function () {
    const style = elementHTML.getAttribute('data-theme');

    if (style === 'light') {
      elementHTML.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      themedImages.forEach(function (img) {
        img.src = img.dataset.darkSrc;
      });
    } else {
      elementHTML.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themedImages.forEach(function (img) {
        img.src = img.dataset.lightSrc;
      });
    }
  });
}

toggleTheme();