let msg = document.querySelector('#tshirt');
function describe_city(city = 'Karachi', county = 'Pakistan') {
    let p = document.createElement('p');
    p.textContent = ` ${city} is in  ${county}`;
    msg.append(p);
}

describe_city();
describe_city("London", "Englan");
describe_city("Sydney", "Australia");
describe_city("Delhi", "India");