// **********Primitive Datatype******************

// String Datatype

var a = "Pooja";
var b = 'shah';
document.write(a + " " + b, "<br>");

// Number Datatype

var a1 = 5;
var b1 = 5.5;
document.write(a1 + "<br/>" + b1 + "<br/>");

// Boolean Datatype

var p = 10;
var q = 20;
document.write(p > q, "<br>");
document.write(p < q, "<br>");

// Undefined Datatype

var p1;
document.write(p1 + "<br/>");

// Null Datatype

var q1 = null;
document.write(q1 + "<br>");

// **********Non-Primitive Datatype************

// Object Datatype

const person = {
    sirName: 'shah',
    age: 10
};
document.write(person + "<br>");
// accessing property using dot notation
document.write(person.sirName + "<br>");
// accessing property using bracket notation
document.write(person['age'] + "<br>");

// Array

// JS Typeof Operator

n1 = 10;
Name = 'pooja';
value = true;
document.write(typeof (n1) + "<br>");
document.write(typeof (Name) + "<br>");
document.write(typeof (value) + "<br>");

// for..in loop(like for of loop)

const human = {
    name1: 'Arav',
    age1: 10
};

for (let key in human) {
    // display the properties
    document.write(`${key}=>${human[key]}` + "<br>");
}

// for...in string example

name2 = 'pooja';
// using for..in loop

for (let i in name2) {
    document.write(name2[i] + "<br>");
}

// for..in array example

arr = [10, 20, 30];
for (let i1 in arr) {
    document.write(arr[i1] + "<br>");
}

// for..of loop

// for..of loop in array

arr1 = [10, 20, 30];
for (let x of arr1) {
    document.write(x + "<br>");
}

// for..of loop in string

name3 = 'pooja';
for (let y of name3) {
    document.write(y + "<br>");
}

// JS Nested Loop

// here outer loop as raw, inner loop as colunm

// Example 1
for (i = 1; i <= 3; i++) {
    for (j = 1; j <= 3; j++) {
        document.write(i + ' ' + j + "<br>");
    }
}

// Example2
for (n = 1; n <= 3; n++) {
    for (m = 1; m <= n; m++) {
        document.write(n + " " + m + "<br>");
    }
}

// pattern example

for (e = 1; e <= 3; e++) {
    for (f = 1; f <= e; f++) {
        document.write("* ");
    }
    document.write("<br>");
}

for (c = 1; c <= 5; c++) {
    for (d = 1; d <= 3; d++) {
        document.write("* ");
    }
    document.write("<br>");
}
