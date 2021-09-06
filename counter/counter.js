const count = document.querySelector('.count');
const lower = document.querySelector('.lower');
const add = document.querySelector('.add');


lower.addEventListener('click', () => { 
    count.innerHTML = parseInt(count.innerHTML) - 1;
});

add.addEventListener('click', () => { 
    count.innerHTML = parseInt(count.innerHTML) + 1;
});
