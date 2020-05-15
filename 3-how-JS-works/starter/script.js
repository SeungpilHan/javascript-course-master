///////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1993);

function calculateAge(year) {
    console.log(2020 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

console.log(age);
var age = 23;

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/








///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
    }
}

john.calculateAge();

var mike = {
    name: 'mike',
    yearOfBirth: 1960
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();





