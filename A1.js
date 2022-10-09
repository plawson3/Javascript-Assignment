const current_users = ['haris', 'ali', 'ammad', 'azhar', 'Ashar'];
const new_users = ['amir', 'alishan', 'AMMAD', 'babar', 'ashar'];

for (let i = 0; i < current_users.length; i++) {
    for (let j = 0; j < new_users.length; j++) {
        if (current_users[i].toLowerCase().trim() != new_users[j].toLowerCase().trim()) {
            console.log(`username is available ${current_users[i]}`);
        }
        else {
            console.log(`enter a new username, this ${new_users[i]} username has already been taken!!!`);
        }

    }
}