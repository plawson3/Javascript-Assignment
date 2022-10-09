let list = ['Dog', 'Cat', 'Parrot'];

var statement = document.querySelector('#Animals');
var statement1 = document.querySelector('#aboutAnimals');
list.map(function (a) {
    let p = document.createElement('p');
    p.textContent = ` ${a}`;
    statement.append(p);
})

for (let i = 0; i < list.length; i++) {
    let input = prompt(`Enter a statment about ${list[i]}`);
    let p = document.createElement('p');
    p.textContent = ` ${list[i]}: ${input}`;
    statement1.append(p);
}

let p1 = document.createElement('p');
p1.textContent = "All Animals are Good!!!!!";
statement1.append(p1);