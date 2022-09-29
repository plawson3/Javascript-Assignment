var name = prompt('Enter Your Name ');
var msg = `Hello ${name}, Would you like to learn some python`;
var txt_name = document.getElementById('myname');
var text = document.createTextNode(" !!!")
txt_name.innerHTML = msg;
txt_name.appendChild(text);