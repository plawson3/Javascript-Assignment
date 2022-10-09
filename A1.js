let msg = document.querySelector('#tshirt');
function make_shirt(size = 'large', text = 'I Love JavaScript') {
    let p = document.createElement('p');
    p.textContent = `The size of shirt is ${size} and Instruction is  ${text}`;
    msg.append(p);
}

make_shirt("Medium", "I Love C#");
make_shirt();