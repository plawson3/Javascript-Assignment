let arr1 = document.querySelector('#oldArr');
let arr2 = document.querySelector('#newArr');
function show_magicians(i) {
    return list[i];
}
function make_great(list) {

    for (let i = 0; i < list.length; i++) {

        let p = document.createElement('p');
        let p1 = document.createElement('p');

        p.textContent = `${show_magicians(i)}`;
        arr1.append(p);

        p1.textContent = `The Great ${show_magicians(i)}`;
        arr2.append(p1);

    }

}

const list = ['AMASIS', 'THE AMAZING JOHNATHAN', 'CRISS ANGEL', 'THEODORE ANNEMANN'];
make_great(list);