let img1 =document.querySelector('.img1');
let img2 =document.querySelector('.img2');
let img3 =document.querySelector('.img3');
console.log(img1)
img1.addEventListener('click', function (){
    img1.style.width = '78%';
    img2.style.width = '7%';
    img3.style.width = '7%';
    document.querySelector('.span1').style.display = 'block';
    document.querySelector('.span2').style.display = 'none';
    document.querySelector('.span3').style.display = 'none';
})
img2.addEventListener('click', function (){
    img1.style.width = '7%';
    img2.style.width = '78%';
    img3.style.width = '7%';
    document.querySelector('.span1').style.display = 'none';
    document.querySelector('.span2').style.display = 'block';
    document.querySelector('.span3').style.display = 'none';
})
img3.addEventListener('click', function (){
    img1.style.width = '7%';
    img2.style.width = '7%';
    img3.style.width = '78%';
    document.querySelector('.span1').style.display = 'none';
    document.querySelector('.span2').style.display = 'none';
    document.querySelector('.span3').style.display = 'block';
})