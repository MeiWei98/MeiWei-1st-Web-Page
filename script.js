let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');
let bod = document.querySelector('.container');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});

function ShowHelloMessage() {
    var name = document.getElementById("myname");
    if(name.value.trim().length >0)
    {
        document.getElementById("hellomessage").innerHTML = "Hello, " + name.value;
    }
    
}
document.getElementById("mybutton").onclick = ShowHelloMessage;
