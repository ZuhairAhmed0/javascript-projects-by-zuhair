let myMail = document.getElementById('mail');
let myLabel = document.getElementById('lab');
let myPass = document.getElementById('pass');
let myLabel2 = document.getElementById('lab2');

function focus(input, label) {
    input.onfocus = function () {
        label.classList.add('labFoc');
    };
}
focus(myMail, myLabel);
focus(myPass, myLabel2);

function blur(input, label) {
	input.onblur = function () {
		if (this.value == '') {
			label.classList.remove('labFoc');
		} else {
			label.classList.add('labFoc');
		}
	};
}
blur(myMail, myLabel);
blur(myPass, myLabel2);
