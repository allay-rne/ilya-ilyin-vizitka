function highlightSyntax(code) {
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\b(const)\b/g, '<span class="hl-keyword">$1</span>')
    .replace(/'([^']*)'/g, '<span class="hl-string">\'$1\'</span>')
    .replace(/\b(true|false)\b/g, '<span class="hl-boolean">$1</span>')
    .replace(/([{}[\]])/g, '<span class="hl-punctuation">$1</span>');
}

export function typeScreen() {
  const textElement = document.querySelector('.hero__laptop-screen');
  const text = `const dream = {
  goal: 'Frontend Developer',
  city: 'Novosibirsk',
  open: true,
};`;
  let index = 0;

  function type() {
    if (index < text.length) {
      index++;
      const currentText = text.slice(0, index);
      textElement.innerHTML = highlightSyntax(currentText);
      setTimeout(type, 100);
    }
  }

  type();
}

