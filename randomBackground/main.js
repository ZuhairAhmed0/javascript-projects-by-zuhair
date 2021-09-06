const body = document.querySelector('body');
const button = document.querySelector('button');
//const color = ['red', 'grren', 'blue', 'yellow', 'pink', 'purple'];
const p = document.querySelector('p');
//body.style.backgroundColor = 'violet';
//p.innerHTML = 'violet \b';
//button.addEventListener('click', chagneBackground);
//
//function chagneBackground() {
//    const colorIndex = parseInt(Math.random()*color.length);
//    body.style.backgroundColor = color[colorIndex];
//    p.innerHTML = color[colorIndex] + '\b';
//}
const color = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//button.addEventListener('click', changehex);

function changehex(){
    let hex = '#';
    for(let i = 0; i<=5; i++){
        const index = Math.floor(Math.random()*color.length);
        hex += color[index];
    }
    p.textContent = 'hex color : '+ hex;
    body.style.backgroundColor = hex;
    console.log(hex);
}
setInterval(() => {
    changehex();
}, 2000);