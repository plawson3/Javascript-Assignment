let car = "ferrari";
if (car == "ferrari") {
    console.log("you predicted True");
}
else {
    console.log("you predicted False");
}

let grade = "";
let marks = Number(prompt("Enter Your marks"));

console.log(marks, typeof marks);

if (marks > 0 && marks < 60) {
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

document.getElementById('marks').innerHTML = grade;