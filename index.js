const input = document.querySelector('input')
const error = document.querySelector('.error-p')


input.addEventListener('invalid', (e) => {

    const query = window.matchMedia('(min-width: 376px)');

    if (query.matches) {
        e.preventDefault();
        error.style.display = 'block'
        input.className = 'notValid'
    }
});

