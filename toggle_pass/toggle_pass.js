




function myover() {
    let myshow = document.getElementById("my_pass");
    if (myshow.type === "password") {
        myshow.type = "text";
    } else {
        myshow.type = "password";
    }
}