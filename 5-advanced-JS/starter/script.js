// Function constructor
/*
var john = {
  name : 'John',
  yearOfBirth:1990,
  job: 'teacher'
};

console.log(john);

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this. job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth)
};

Person.prototype.lastName = 'Smith';

var john = new Person('Han', '1993', 'engineer');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/
/*
//Object.create
var personProto = {
 calculateAge: function() {
   console.log(2020 - this.yearOfBirth)
 } 
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1993;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: {value: 'Jane'},
  yearOfBirth: { value: 1969},
  job: { value: 'designer'}
});
*/

// Primitives vs objects

/*
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

var age = 27;
var obj = {
  name: 'Jones',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i ++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

var ages = arrayCalc(years, calculateAge);
var isFullAge = arrayCalc(ages, isFullAge);

console.log(ages);
console.log(isFullAge);

*/

/*
var height = [95, 55, 80, 66, 70];

function arraySize(arr, fn) {
  arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function isSize(el) {
  return el >= 70;
}

var goodSize = arraySize(height, isSize);

console.log(goodSize);
*/

/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ' , can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello' + name + ', What do you do?'); 
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion = interviewQuestion('designer');

designerQuestion('Han');
designerQuestion('Mi');

interviewQuestion('teacher')('Mark');
*/

/*
(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck); 
})(6);
*/






























































