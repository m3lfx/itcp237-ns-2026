console.log('hello world')
var today = new Date();
console.log(today.getDate()); //4
console.log(today.getMonth()); //
console.log(today.getFullYear()); //2020
console.log(today.getHours()); //23
console.log(today.getMinutes()); //13
console.log(today.getSeconds()); //10
//number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(today.getTime()); //1432748611392
console.log(today.getTimezoneOffset()); //-330 Minutes

// console.log('hello world')
// var today = new Date();
// console.log(today.getDate()); //4
// console.log(today.getMonth()); //
// console.log(today.getFullYear()); //2020
// console.log(today.getHours()); //23
// console.log(today.getMinutes()); //13
// console.log(today.getSeconds()); //10
// //number of milliseconds since January 1, 1970, 00:00:00 UTC
// console.log(today.getTime()); //1432748611392
// console.log(today.getTimezoneOffset()); //-330 Minutes

// var start = Date.now();
// // loop for a long time
// for (var i = 0; i < 1000000; i++);
// var end = Date.now();
// var elapsed = end - start; // elapsed time in milliseconds
// console.log(elapsed); //71

// var s = new String("dummy"); //Creates a String object
// console.log(s); //"dummy"
// console.log(typeof s); //"object"
// var nonObject = "1" + "2"; //Create a String primitive
// console.log(typeof nonObject); //"string"
// var objString = new String("1" + "2").; //Creates a String object
// console.log(typeof objString); //"object"

// console.log("Hello".length); //5
// console.log("Hello".charAt(0)); //"H"
// console.log("Hello".charAt(1)); //"e"
// console.log("Hello".indexOf("e")); //1
// console.log("Hello".lastIndexOf("l")); //3
// console.log("Hello".startsWith("H")); //true
// console.log("Hello".endsWith("o")); //true
// console.log("Hello".includes("X")); //false

var splitStringByWords = "Hello World".split(" ");
console.log(splitStringByWords); //["Hello", "World"]
var splitStringByChars = "Hello World".split("");
console.log(splitStringByChars); //["H", "e", "l", "l", "o", " ","W", "o", "r", "l", "d"]
console.log("lowercasestring".toUpperCase()); //"LOWERCASESTRING"
console.log("UPPPERCASESTRING".toLowerCase());
//"upppercasestring"
console.log("There are no spaces in the end           ".trim());

// var a; //declares a variable but its undefined
// var b = 0;
// console.log(b); //0
// console.log(a); //undefined
// console.log(a + b)

// console.log(true && true); // true AND true returns true
// console.log(true && false);// true AND false returns false
// console.log(false && true);// false AND true returns false
// console.log("Foo" && "Bar" && "bar2");// Foo(true) AND Bar(true) returns Bar
// console.log(false && "Foo");// false && Foo(true) returns false
// console.log("Foo" && false);// Foo(true) && false returns false
// console.log(false && (1 == 2));// false && false(1==2) returns false

// console.log("" && "Foo"); //First operand is falsy - return it
// console.log("Foo" && "Bar"); //First operand is truthy, return the second operand
// console.log(0 || "Foo"); //First operand is falsy - return second operand
// console.log("Foo" || "Bar"); //First operand is truthy, return it
// console.log(function () { } || false);

function greeting(name) {
    // if (name === undefined) {
    //     names = "john"
    // }

    names = name || "John";
    console.log(name);
    // console.log("Hello " + ${names});
    console.log(`Hello ${names}`);
}
// greeting("Johnson"); // alerts "Hi Johnson";
greeting();

// c = add(1, 2);
// function add(a, b) {
//     return a + b;
// }
// console.log(c)

const add = function (a, b) {
    return a + b;
}
c = add(1, 2);

console.log(c);