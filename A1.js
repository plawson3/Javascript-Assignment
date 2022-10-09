let arr1 = document.querySelector('#oldArr');

function items(list) {

    for (let i = 0; i < list.length; i++) {
        let p = document.createElement('p');
        p.textContent = list[i];
        arr1.append(p);
    }
}

const list = [];
while (true) {
    let input = prompt('Enter Items you wants on sandwitch, Press Enter when done');
    if (input != "") {
        list.push(input);
    }
    else {
        break;
    }
}
items(list);