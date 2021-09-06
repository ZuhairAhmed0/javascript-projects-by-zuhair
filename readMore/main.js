var heading = document.getElementsByClassName("accordion");
var i ;

    for( i = 0; i < heading.length; i++){
        heading[i].addEventListener('click', function(){
            this.classList.toggle("active");
            var desc = this.nextElementSibling;
            if(desc.style.maxHeight){
                desc.style.maxHeight = null;
            }else {
                desc.style.maxHeight = desc.scrollHeight + "px";
            }

       });
        
    }
    setTimeout("document.bgColor='#ecb8af'", 2000);
    setTimeout("document.bgColor='#e09c90'", 3000);
    setTimeout("document.bgColor='#d47f70'", 4000);
    setTimeout("document.bgColor='#b6503e'", 5000);
    setTimeout("document.bgColor='#ac331e'", 6000);
    setTimeout("document.bgColor='#a12009'", 7000);