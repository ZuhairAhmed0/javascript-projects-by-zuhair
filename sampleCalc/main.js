const myInput1 = document.getElementById("input1");
const myInput2 = document.getElementById("input2");
const myInput3 = document.getElementById("input3");

function equal1() {
    myInput3.innerHTML = Number(myInput1.value) + Number(myInput2.value);
}
function equal2() {
    myInput3.innerHTML = Number(myInput1.value) - Number(myInput2.value);
}
function equal3() {
    myInput3.innerHTML = Number(myInput1.value) * Number(myInput2.value);
}
function equal4() {
    myInput3.innerHTML = Number(myInput1.value) / Number(myInput2.value);
}
function equal5(){
    myInput3.innerHTML = Number(myInput1.value) % Number(myInput2.value);
}


//const myAge = prompt("من فضلك ادخال رقم");

//myAge % 2 != 1 ? alert("عدد زوجي") : alert("عدد فردي");
//if (myAge % 2 != 1) {
//    alert("عدد زوجي");
//}else{
//    alert("عدد فردي");
//}




function inputout(){ 

    const x = document.getElementById("inp").value;
    const myP = document.getElementById("p");

   //for(let y = 1; y <=10; y++){
   //    parseInt(x);
   //    myP.innerHTML += (x + " X " + y + " = " + x*y + "<br>");
   //}
    if(x >=90 && x <=100){
        myP.innerHTML = "A";
    }else if(x >=80 && x <=89) {
        myP.innerHTML = "B";
    }else if(x >=70 && x <=79) {
        myP.innerHTML = "C";
    }else if(x >=60 && x <=69) {
        myP.innerHTML = "D";
    }else {
        myP.innerHTML = "F";
    }
}