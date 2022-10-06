let list = ['Admin', 'Eric', 'Teddy', 'Vernick', 'Houze'];

for (let i = 0; i < list.length; i++) {

    if (list[i] == 'Admin') {
        console.log(` Hello ${list[i]}, would you like to see a status report?`);
    }
    else {
        console.log(` Hello ${list[i]}, thank you for logging in again.`);
    }
}
