const search = document.querySelector('.search');
const btn = document.querySelector ('.btn');
const input = document.querySelector('.input');

btn.addEventListener("onmouseenter", () => {
  search.classList.toggle("active");
  input.focus();
});