var container = document.querySelector('.container-par');

document.querySelector('.navbar-icon-h').addEventListener('click', () => {
    container.classList.toggle('login');
});


const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];

let i = 0;

Array.from(document.querySelectorAll('.nav-link-h')).forEach((item) => {
    item.style.cssText = `background-color :${colors[i++]}`;

});



Array.from(document.querySelectorAll('.navigation-button')).forEach((item) => {
    item.addEventListener('click', () => {
        item.parentElement.parentElement.classList.toggle('change');
    });
});

function multiply(a, b) {
    a * b
}