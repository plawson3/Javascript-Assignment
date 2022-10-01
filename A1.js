function bind(ele, list) {
    for (let i = 0; i < list.length; i++) {
        let p = document.createElement('p');
        p.textContent = "I Would Like to Invite " + list[i].toUpperCase() + " on Dinner!!";
        ele.append(p);
    }
}

var list = ['Ammad'];
var statement = document.querySelector('#statement');
bind(statement, list);

//printing guest at the beginning
var stat1 = document.querySelector('#stat1');
var guestAtBeginning = "Ali";
list.unshift(guestAtBeginning);
bind(stat1, list);

//printing guest at the Middle
var len = parseInt(list.length / 2);
var stat2 = document.querySelector('#stat2');
var guestInMiddle = "Amir";
list.splice(len, 0, guestInMiddle);
bind(stat2, list);


//printing guest at the End
var stat3 = document.querySelector('#stat3');
var guestAtBeginning = "Alishan";
list.push(guestAtBeginning);
bind(stat3, list);


