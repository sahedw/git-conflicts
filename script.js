const yearElement = document.querySelector('[data-js="year"]');
const date = new Date().getDate();
yearElement.textContent = date;
