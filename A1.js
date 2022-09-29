function CamelCase(name) {
    var temp = '';
    var tempList = [];
    var list = name.split(' ');
    var fname = list[0].charCodeAt(0);
    var lname = list[1].charCodeAt(0);

    if (fname >= 97) {
        var diff = fname - 97;
        fname = 65 + diff;
        temp = String.fromCharCode(fname) + list[0].substr(1);
        tempList.push(temp);
    }
    if (lname >= 97) {
        var diff = lname - 97;
        lname = 65 + diff;
        temp = String.fromCharCode(lname) + list[1].substr(1);
        tempList.push(temp);
    }

    return tempList;
}
var name = prompt("Enter Your Name");
document.getElementById("mynameup").innerHTML = name.toUpperCase();
document.getElementById("mynamelow").innerHTML = name.toLowerCase();
var newlist = CamelCase(name);
console.log(newlist);
var word = '';
for (let i = 0; i < newlist.length; i++) {
    word += newlist[i] + " ";
    console.log(word);

}
document.getElementById("mynamecc").innerHTML = word;
