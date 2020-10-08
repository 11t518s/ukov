const togglebtn = document.querySelector('.navBarToggleBtn');
const menu = document.querySelector('.navBarMenu');

togglebtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

