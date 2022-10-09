let msg = document.querySelector('#tshirt');
function make_shirt(size, text) {
    let p = document.createElement('p');
    p.textContent = `The size of shirt is ${size} and Instruction is  ${text}`;
    msg.append(p);
}

make_shirt(12, 'Height should be same as given in inches');