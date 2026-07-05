export function typeText() {
  const textElement = document.querySelector('.preloader__text');
  const blockElement = document.querySelector('.preloader')
  const text = 'npm run dev';
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.textContent += text[index];
      index++;
      setTimeout(type, 200);
    } else {
      setTimeout(() => {
        blockElement.classList.add('preloader--hidden')
      }, 1000)
    }
  }

  type();
}

typeText();