var name = prompt("Enter Name");
var with_spaces = "With Spaces &nbsp;&nbsp;&nbsp;&nbsp;" + name + "  ";
var without_spaces = "Without Spaces " + name.trim();
document.getElementById('name1').innerHTML = with_spaces;
document.getElementById('name2').innerHTML = without_spaces;