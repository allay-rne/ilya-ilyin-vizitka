export function scrollReveal() {
  const items = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--is-visible');
        }
      });
    },
    {
      rootMargin: '0px 0px -150px 0px'
    });

  items.forEach((item) => {
    observer.observe(item);
  });
}

scrollReveal()