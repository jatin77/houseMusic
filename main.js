const toggleBtn = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
