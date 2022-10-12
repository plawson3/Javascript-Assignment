let arr1 = document.querySelector('#car');

function Car(...info) {
    let obj = new Object();
    obj["Manufacturar"] = info[0];
    obj["Model"] = info[1];
    obj["Color"] = info[2];
    obj["HorsePower"] = info[3];

    return obj;

}

var Ferrari = Car("Ferrari", "G-17", "Black", "1500CC");
for (let key in Ferrari) {
    let p = document.createElement('p');
    p.textContent = `${key} : ${Ferrari[key]}`;
    arr1.append(p);
}

