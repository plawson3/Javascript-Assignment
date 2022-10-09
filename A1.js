let msg = document.querySelector('#tshirt');
function show_magicians(list) {

    for (const item in list) {

        let p = document.createElement('p');
        p.textContent = `${list[item]}`;
        msg.append(p);
    }
}


const list = ['AMASIS', 'THE AMAZING JOHNATHAN', 'CRISS ANGEL', 'THEODORE ANNEMANN'];
show_magicians(list);