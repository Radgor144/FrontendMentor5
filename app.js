let open = document.querySelector('.open-img');
let close = document.querySelector('.close-img');
let menu = document.querySelector('.menu');

open.addEventListener("click", () => {
    menu.style.display = 'flex';
    menu.style.transition = '8s';
    
});

close.addEventListener("click", () => {
    menu.style.display = 'none';

});
