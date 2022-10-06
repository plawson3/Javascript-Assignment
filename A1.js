var list = ['canda', 'europe', 'swizerland', 'paris', 'australia'];
document.getElementById('list1').innerHTML = list;

var sortedList = [...list];
document.getElementById('list2').innerHTML = sortedList.sort(function (a, b) {
    return a.localeCompare(b);
});

document.getElementById('list3').innerHTML = list;

var reversesortedList = [...list];
document.getElementById('list4').innerHTML = reversesortedList.sort(function (a, b) {
    return b.localeCompare(a);
});

document.getElementById('list5').innerHTML = list;

var reverseList = [...list];
document.getElementById('list6').innerHTML = reverseList.reverse();

document.getElementById('list7').innerHTML = list;

document.getElementById('list8').innerHTML = list.sort(function (a, b) {
    return a.localeCompare(b);
});

document.getElementById('list9').innerHTML = list.reverse();
