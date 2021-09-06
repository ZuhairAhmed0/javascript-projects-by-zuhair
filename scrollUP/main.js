    var myButton = document.getElementById("but");

    function butp() {

            "use strict";
            if (window.pageYOffset > 400) {
                myButton.style.display = "block";
            }else {
                myButton.style.display = "none";
            } 

        };
    window.onload = butp;
    window.onscroll = butp; 

    myButton.onclick = function (){
        "use strict";
        window.scrollTo ({
            top: 0,
            left: 0,
            behavior:'smooth',

        })
        myButton.style.color = "blue";
    };

        