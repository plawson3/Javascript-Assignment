let msg = document.querySelector('#tshirt');
function show_magicians(i) {
    // console.log(item);
    return list[i];
}
function make_great(list) {

    for (let i = 0; i < list.length; i++) {

        let p = document.createElement('p');
        p.textContent = `The Great ${show_magicians(i)}`;
        msg.append(p);
    }

}

const list = ['AMASIS', 'THE AMAZING JOHNATHAN', 'CRISS ANGEL', 'THEODORE ANNEMANN'];
make_great(list);