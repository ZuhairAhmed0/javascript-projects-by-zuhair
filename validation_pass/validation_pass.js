const input = document.querySelector('input');
const span = document.querySelector('span');
input.onkeyup = function (){
    let reg1 = /[a-z]/g;
    let reg2 = /[A-Z]/g;
    let reg3 = /[0-9]/g;
    let reg4 = /[#$&]/;

    if(input.value.match(reg1)) {
        this.style.borderColor = 'red';
    }

    if(input.value.match(reg1)&&input.value.match(reg2)){
        this.style.borderColor = '#dbe720';
    }

    if(input.value.match(reg1)&&input.value.match(reg2)&&input.value.match(reg3)) {
        if(input.value.length >= 8){
            this.style.borderColor = 'rgb(81 220 55)';
        }

    }
    if(input.value.match(reg1)&&input.value.match(reg2)&&input.value.match(reg3)&&input.value.match(reg4)) {
        if(input.value.length >= 8){
            this.style.borderColor = 'green';
        }
        
        
    }
}

function myover() {
    let myshow = document.getElementById("my_pass");
    if (myshow.type === "password") {
        myshow.type = "text";
    } else {
        myshow.type = "password";
    }
}