var list = ['Honda Bike', 'Audi Car', 'Lamborgini Car', 'Ferrari Car', 'Private Jet'];
var statement = document.querySelector('#statement');

for (let i = 0; i < list.length; i++) {
    let p = document.createElement('p');
    p.textContent = "I Would Like to own a " + list[i].toUpperCase();
    statement.append(p);
}