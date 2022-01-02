// Write a program to take an input from the user (num) and check whether it is a prime number or not."

var n = parseInt(prompt("Enter Number"));
num = 0

for (var i = 2; i< n; i++) {
    if (n % i == 0) {
        num++;
    }
}
if (num == 2) {
    alert("It is prime number");
} else {
    alert("It is not prime number");
}