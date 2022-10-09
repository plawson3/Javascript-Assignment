let msg = document.querySelector('#tshirt');
function city_country(name = 'Atif Aslam', title = 'Kuch is tarha') {

    let dict = new Object();
    dict["Name"] = name;
    dict["Title"] = title;

    for (const key in dict) {

        let p = document.createElement('p');
        p.textContent = ` ${key} : ${dict[key]}`;
        msg.append(p);
    }
    msg.append(document.createElement('hr'));
}


city_country();
city_country("In the End", "Linkin Park");
// city_country("Sydney", "Australia");
// city_country("Delhi", "India");