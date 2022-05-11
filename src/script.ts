window.addEventListener('load', (ev: Event) => {
  const div: HTMLDivElement = document.createElement('div');
  div.style.color = 'white';
  div.textContent = 'Hello, world!';
  document.body.appendChild(div);
});