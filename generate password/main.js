let myInput = document.querySelector('input');
let myButton = document.querySelector('button');
let myImg = document.querySelector('img');

myButton.onclick = function generatePassword() {
    let regEx = '0123456789ZABCDEFGHIJKLMONPQRSTUVWXYabcdefghijklmonpqrstuvwxy0123456789~!@#$%^&*?';

    let str = '';

    for(let i = 0; i<=7; i++){
        str+= regEx.charAt(Math.floor(Math.random() * regEx.length));
    }
    myInput.value = str;
}

setInterval(() => {
    let ArrayImg = [
        'photo_2021-03-16_17-18-55.jpg',
        'photo_2021-03-16_17-18-46.jpg',
        'photo_2021-03-16_17-18-37.jpg',
        'photo_2021-03-16_17-19-28.jpg',
        'photo_2021-03-16_17-19-18.jpg',
        'photo_2021-03-16_17-19-07.jpg',
        'photo_2021-03-16_17-19-14.jpg',
        'photo_2021-03-16_17-19-02.jpg'
    ]
    myImg.src = 'images/' +  ArrayImg[Math.floor(Math.random()*ArrayImg.length)]

},1000);




