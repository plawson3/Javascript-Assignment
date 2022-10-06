let car = "ferrari";
if (car == "ferrari") {
    console.log("you predicted True");
}
else {
    console.log("you predicted False");
}

let grade = "";
let marks = 0;//Number(prompt("Enter Your marks"));


if (marks >= 0 && marks < 60) {
    grade = "Better luck next Time, F";
}
else if (marks >= 60 && marks <= 70) {
    grade = "Your Grade is C";
}
else if (marks > 70 && marks <= 80) {
    grade = "Your Grade is B";
}
else if (marks > 80 && marks <= 90) {
    grade = "Your Grade is A";
}
else if (marks > 90 && marks <= 100) {
    grade = "Your Grade is A+";
}
else if (marks < 0 || marks > 100) {
    grade = "Wrong Marks";
}
console.log(grade);
//document.getElementById('marks').innerHTML = grade;

//vale and type checking
let mystring = "123";
if (mystring === 123) {
    console.log("True");
}
else {
    console.log("False");
}

//upper and lower case checking 
let mystring1 = "haris";
if (mystring1.toUpperCase() === 'haris'.toLowerCase()) {
    console.log(mystring1, "True");
}
else {
    console.log(mystring1, "False");
}

const list = ['haris', 'ali', 'ammad', 'azhar', 'ashar'];
if (list.includes('rehman')) {
    console.log("rehman is located at index ", list.indexOf('rehman'), "True");
}
else if (list.includes("haris")) {
    console.log("haris is in list at index ", list.indexOf('haris'));
}
else {
    console.log("No Element Found");
}

