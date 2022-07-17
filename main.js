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












//================= Strings
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








//================= Arrays
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








//================= Object Literals
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


