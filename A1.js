var list = ['ali', 'amir', 'usama', 'ammad'];
var friendsEle = document.querySelector('#friendNames');

// let node = list.map(x => {
//     let li = document.createElement('li');
//     li.textContent = x;
//     return li;
// });


// friendsEle.append(...node);

for (let i = 0; i < list.length; i++) {
    let li = document.createElement('li');
    li.textContent = list[i];
    friendsEle.append(li);
}