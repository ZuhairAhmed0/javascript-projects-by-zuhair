let man = document.getElementById("main");
let p = document.querySelector('p');
man.textContent = 10;

let set = setInterval(function() {
    if(man.textContent <= 0){
        clearInterval(set);
        man.textContent = "Downloading...";
    }else{
        man.textContent--;
        p.style.width = `${p.clientWidth - 20}px`
    }
},1000);

