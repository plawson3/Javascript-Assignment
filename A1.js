var list = ['Ali', 'Alam', 'Ammad', 'Asir'];
var statement = document.querySelector('#statement');

for (let i = 0; i < list.length; i++) {
    let p = document.createElement('p');
    p.textContent = "I Would Like to Invite " + list[i].toUpperCase() + " on Dinner!!";
    statement.append(p);
}