function bind(ele, list) {
    for (let i = 0; i < list.length; i++) {
        let p = document.createElement('p');
        p.textContent = "I Would Like to Invite " + list[i].toUpperCase() + " on Dinner!!";
        ele.append(p);
    }
}

var list = ['Ammad', "Ali", 'Amir', 'Alishan'];
var popList = []
var statement = document.querySelector('#statement');
bind(statement, list);

for (let i = 0; i < list.length; i++) {

    let p = document.createElement('p');
    var unInvited = document.querySelector('#un-invited');
    var Invited = document.querySelector('#invited');
    if (i < 2) {
        p.textContent = list[i] + " sorry you aren't invited to dinner.";
        unInvited.append(p);
        //getting index of element which is meant to be removed
        var idx = list.indexOf(list[i]);
        //inserting index of elements, so can pop in the end
        popList.pop(idx);
        //function to remove 1 element at a time using index of that element.
        // list.splice(idx, 1);
    }
    else {
        p.textContent = list[i] + " You're invited to dinner.";
        Invited.append(p);
        var idx = list.indexOf(list[i]);
        popList.pop(idx);
        // list.splice(idx, 1);
    }
}
//Remove every item from the list which is referenced into the pop List.
list.splice(popList, popList.length);
var emptyList = document.querySelector('#stat3');
emptyList.append('List is Empty');

