function bind(ele, list) {
    for (let i = 0; i < list.length; i++) {
        let p = document.createElement('p');
        p.textContent = "I Would Like to Invite " + list[i].toUpperCase() + " on Dinner!!";
        ele.append(p);
    }
}

var list = ['Ali', 'Alam', 'Ammad', 'Asir'];
var statement = document.querySelector('#statement');
bind(statement, list);

//printing not comming guest naem
var notCommingGuest = list[3] + " is not comming!!";
document.getElementById('stat1').innerHTML = notCommingGuest;

//removing not comming guest form the list
list.pop(notCommingGuest);

//adding new guest to the list
var newGuest = "asif";
list.push(newGuest);
var statement1 = document.querySelector('#stat2');
bind(statement1, list);


let p = document.createElement('p');
p.textContent = "I Would Like to Invite " + newGuest.toUpperCase() + " on Dinner. Because one of my guest is unable to join us !!";
statement.append(p);