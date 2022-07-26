/*
alert("Hello World");
*/

/*
console.log("Message displyed on console");


console.error("An error msg is displayed in the console");

console.warn("A warning msg is displayed in the console");
*/









//================= VAR, LET, CONST =================

/* 
Dont really want to use VAR anymore as it is globally scoped
LET allows the reassigment of valiuses (is mutable)
CONST
*/

/*
let age = 30;
age = 38;
console.log(age);
*/

/*
const age = 30;
age = 38;
console.log(age);  -- This will throw a TypeError: Assignment to constant variable
*/











//================= DATA TYPES =================
//================= Primatives: strings, numbers, booleam, null, undefined, symbol
/*
const name = "Jason";
const age = 38;
const isDayTime = true;
const rating = 4.5;     // no float type in JS
const x = null;
const y = undefined // let z; will created an undefined variable using let

// test the data type
console.log(typeof age);
*/












//================= STRING
/*
fName = "Jason"
lName = "Etienne"
console.log("My name is " + fName + " " + lName); // old way of concatenation
// use template stings instead
const hello = `My name is ${fName} ${lName}` // use backtick instead of quotes
console.log(hello);


const s = "Hello World"
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5)); // pulls a substring out of a string

console.log(s.split(""));// split a string into an array, in perenthesis put in your splitting paramater ie "" , ect
const list = "math, science, finance"
console.log(list.split(","));
*/








//================= ARRAYS
/*
const num = new Array(1,2,3,4,5,6); // using a constructer, not really used any more
console.log(num);

const n = ["a","b","c","d","e"]; // this method is more commonly used now
console.log(n);

const x = ["a",1,"c",false,"e"]; 
console.log(x);

// accessing an array item
console.log(n[1]);

// add to an array - not the best way to do this
x[5] = "new"
console.log(x);

// use the push method instead
x.push("using push")
console.log(x);

// adding to start of array
x.unshift("adde to start of array")
console.log(x);

// remove last elemetn of an array using pop
x.pop(x);
console.log(x);

// check if is an array
console.log(Array.isArray(x));

// get index of an element of an array
console.log(x.indexOf(1));
*/








//================= OBJECT LITERALS
/*
const person = {
  fName: "Jason",
  lName: "Etienne",
  age: 37,
  interets: ["tech", "music", "art"],
  address: {
    street: "123 fake st",
    city: "Dublin",
    country: "Ireland",
  },
};
console.log(person);
console.log(person.fName);// access a value
console.log(person.address);
console.log(person.fName, person.lName);
console.log(person.interets[1]);
console.log(person.address.city);

//destructuring - create a varaible from items in an object literal
const{fName, lName} = person;
console.log(fName)
// if an embedded object...
const{age, address:{city}} = person;
console.log(city);

// add properties
person.email = "je@gmail.com"
console.log(person);



const toDos = [
    {
        id:1,
        text:"study",
        isComplete: true
    },
    {
        id:2,
        text:"read",
        isComplete: true
    },
    {
        id:3,
        text:"exercise",
        isComplete: false
    },
    {
        id:4,
        text:"sleep",
        isComplete: true
    }
];

console.log(toDos);

console.log(toDos[1].text);


// convert to JSON
const toDosJSON = JSON.stringify(toDos);
console.log(toDosJSON);
*/





//================= FOR LOOPS
/*
for(let i = 0; i<10; i++){
    console.log(i);
}

for(let i = 0; i<10; i++){
    console.log(`For loop number: ${i}` );
}
*/




//================= WHILE LOOPS
/*
let i = 0;
while(i<10){
    console.log(i);
    i++;
}

let j = 0;
while(j<10){
    console.log(`While loop number: ${j}` );
    j++;
}
*/




//================= LOOP THROUGH AN ARRAY
/*
const toDos = [
    {
        id:1,
        text:"study",
        isComplete: true
    },
    {
        id:2,
        text:"read",
        isComplete: true
    },
    {
        id:3,
        text:"exercise",
        isComplete: false
    },
    {
        id:4,
        text:"sleep",
        isComplete: true
    }
];


// not the best way to loop through an Array

for (let i = 0; i< toDos.length; i++) {
    console.log(toDos[i].text);
    }

console.log("----------------")

// better way would be 
for(let i of toDos){
    console.log(i);
}

console.log("----------------")

for(let i of toDos){
    console.log(i.text);
}
*/


// high order array methods, prob bet way to iterate through a loop through an aray





//================= For Each, Map (new array from an existing array), Filter (new aray based on a condition)
/*
const toDos = [
    {
        id:1,
        text:"study",
        isComplete: true
    },
    {
        id:2,
        text:"read",
        isComplete: true
    },
    {
        id:3,
        text:"exercise",
        isComplete: false
    },
    {
        id:4,
        text:"sleep",
        isComplete: true
    }
];


//================= FOR EACH
toDos.forEach(function(toDos){
    console.log(toDos.text);

})

console.log("----------------")



//================= MAP
const toDoText = toDos.map(function(toDos){
    return toDos.text;
})

console.log(toDoText);



console.log("----------------")



//================= Filter eg return when a condition is TRUE
const toDoCompleted = toDos.filter(function(toDos){
    return toDos.isComplete === true;
});

console.log(toDoCompleted);


console.log("----------------")



//================= CHAINING ARRAY METHODS
const toDoCompletedAndText = toDos.filter(function(toDos){
    return toDos.isComplete === true;
}).map(function(toDos){
    return toDos.text;
});

console.log(toDoCompletedAndText);

*/








//================= CONDITIONALS
/*
const x = 10;
if (x==10) {
    console.log("x is 10");
}


const y = "10";
if (y===10) {
    console.log("y is 10"); // not eqaul to the data type string/num
} else if(y > 10){
    console.log("y is greater than 10")
} else{
    console.log("y is less than 10");
}


//================= Multiple conditions


const x = 2;
const y = 25;
if (x > 5 || y > 10) {
    console.log("x greater than 5 OR y is greater than 25"); 
} 


const i = 2;
const j = 25;
if (i > 5 && j > 10) {
    console.log("x greater than 5 AND y is greater than 25"); // this is false so nothing logged to console
} 
*/


//================= Ternary Operator - ?= set var, :=else (Shorthand if statment can be use to assign variables based on a condition)
/*
const x = 10;
const colour = x>10 ? "red" : "blue";
console.log(colour);
*/






//================= SWITCHES
/*
const x = 11;
const colour = x>10 ? "red" : "blue";
switch(colour){
    case "red":
        console.log("colour is red");
        break;
    case "blue":
        console.log("colour is blue");
        break;
    default:
        console.log("colour is not red or blue ")
        break
}
*/









//================= FUNCTIONS
/*    
function addNums(num1,num2){
    console.log(num1 + num2);
}
addNums(5,4);

//addNums(); // prints NaN = Not A Number




// setting default values for the params
function addNums2(num3 = 20,num4 = 15){
    console.log(num3 + num4);
}
addNums2(); // passing in values into our call will overwrite the default values set




// In most cases we wont be loogin to a console but will be returning a value
function addNums3(num5,num6){
    return num5 + num6;
}
addNums3(5,5);
// of then want to console log the return, wrap call in a consloe.log
console.log(addNums3(5,5));



//================= Arrow Functions
const addNums4 = (num7,num8) => num7 + num8;

addNums4(100,100)
console.log(addNums4(100,100));


// if only using 1 param can shorten arrow function as so
const addNums5 = num9 => num9 + 5;

addNums4(16)
console.log(addNums5(16));
*/








//================= OBJECT ORIENTATED PROGRAMMING
/*
// constructor functions should start with a capital letter
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // create a date constructor to make date objects
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// we then instantiate the ojects with the constructor function above
const person1 = new Person("Jason", "Etienne", "07-25-1984"); // this creates a person object
const person2 = new Person("Jane", "Doe", "07-25-1991"); 
const person3 = new Person("Nick", "Cave", "07-25-1957"); 


console.log(person1,person2,person3);
console.log(person3.firstName);
console.log(person3.firstName, person3.lastName);
// using date object
console.log(person1.dob.getFullYear());


// adding methods to an object on line 514 & line 518
console.log(person1.getBirthYear());
console.log(person1.getFullName());
*/




//================= PROTOTYPES
/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);    
}


Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}


Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

const person1 = new Person("Jason", "Etienne", "07-25-1984"); 
const person2 = new Person("Jane", "Doe", "07-25-1991"); 

console.log(person2.getFullName())
console.log(person1);
*/







//================= Classes with Methods
// Same as above just cleaner
/*
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person("Jason", "Etienne", "07-25-1984"); 
const person2 = new Person("Jane", "Doe", "07-25-1991"); 

console.log(person2.getFullName())
console.log(person1);
*/







//================= DOM

































