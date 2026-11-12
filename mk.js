// var name = prompt("Enter your name:");
// var age = Number(prompt("Enter your age:"));
// var year = Number(prompt("Enter current year:"));

// var birthYear = year - age;

// alert("Hello " + name + ", your birth year is " + birthYear);





// var hour = Number(prompt("Enter current hour (0-23):"));

// if (hour >= 5 && hour < 12) {
//     alert("Good Morning!");
// }
// else if (hour >= 12 && hour < 17) {
//     alert("Good Afternoon!");
// }
// else if (hour >= 17 && hour <= 23) {
//     alert("Good Evening!");
// }
// else if (hour >= 0 && hour < 5) {
//     alert("Good Night!");
// }
// else {
//     alert("Invalid Time!");
// }




// var a = +prompt(" enter num")
// for (var i = 1; i <= 10; i++) {
//     console.log(a + "x" + i + '=' + a * i);

// }




var price1 = Number(prompt("Enter first item price:"));
var price2 = Number(prompt("Enter second item price:"));
var price3 = Number(prompt("Enter third item price:"));

var total = price1 + price2 + price3;

var members = Number(prompt("Enter family members:"));

var share = total / members;

alert("Total Bill = " + total);
alert("Each Person Share = " + share);