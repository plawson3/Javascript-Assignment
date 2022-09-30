//Taking Number from User 
var no = prompt('Enter Your Favourite Number: ');
//Creating Message to Display
var msg = `Is ${no}, Your Favourite Number?`;
// Injecting Message into Html of Id msg 
document.getElementById('msg').innerHTML = msg;