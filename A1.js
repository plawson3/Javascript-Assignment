let msg = document.querySelector('#tshirt');
function city_country(city = 'Karachi', county = 'Pakistan') {
    let p = document.createElement('p');
    p.textContent = ` ${city}, ${county}`;
    msg.append(p);
}

city_country();
city_country("London", "Englan");
city_country("Sydney", "Australia");
city_country("Delhi", "India");