/**
 *  first
 *  firstSecond
 *  firstSecondThird
 *
 */

// standard -- camelCase

// variable --container -->

/**
 * == 3 -- number
 * == "frontEnd" --> string
 *  == boolean
 *
 */
// var trackName = "PWD"; // string -- char
// var num1 = 10; // number -->
// var num2 = 10.2; // number
// var flag = true; // boolean
// var firstName = "ali";

// var fname;

// console.log(fname);
// console.log(typeof fname);

// console.log(typeof trackName);
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof flag);

/** var
 * == reassign with deferent datatypes
 * == redeclrtion
 *
 */
// var trackName = "PWD";

// trackName = "Front";

// trackName = 10;
// console.log(trackName);
// var fname;
// fname = "ali";
// console.log(typeof fname);

// special Case
// js Engine --> product --> {}
// var product = null; // clean code

// product = { id: 1, name: "books" }; //

// console.log(typeof product);
// var fname = null;

// console.log(typeof fname);
// console.log(typeof null);

// convert from number to string -- String
// var fname = String(10);

// console.log(fname);
// console.log(typeof fname);
// var x = 10;
// var num = Number("c");

// console.log(num); // NaN -- not a number
// console.log(typeof num);
/**
 * Falsy Values ==
 * ----------------------------
 * ==  false
 * == 0
 * == undefined
 * == null
 * == NAN
 * == ""
 */
// var flag = Boolean(" ");
// console.log(flag);

// NaN
// mona10
// var x = "mona"; // Number("mona") --> NaN
// var y = 10; // Number

// console.log(x - y);
// var x = "hello"; // string
// var y = "at iti"; // string

// var x = "mona"; // NAN
// var y = 4; //  5 string
// console.log(x + y);

// var x = 10; // number

// var y = "mona"; // number --> NAN

// console.log(x - y);
/**==========
 * comparasion Operators [> , < , >=,<=]
 * -------------------------------------------
 * [==] VS [===]
 * ------------------------------------------
 * [==] --> (values Only)
 * [===] ---> (values && datatypes)
 *
 * =========== */

// var x = 10; // 10
// var y = "10"; //Number("10") ==> 10

// console.log(x == y);
// console.log(x === y);
/**------------------logical Operators
 * &&
 * true && true --> true
 * true && false --> false
 * false && true --> false
 * false && false --> false
 * ||
 * true || true --> true
 * true || false --> true
 * false || true --> true
 * false || false --> false
 * !
 *
 * true --> false
 * false --> true
 * --------- Short Circuit ------- */

/**
 * "mona" && "ali" -->
 *  true &&  true --> ali
 * ------------------------
 * 0 && "hoda" ==>
 * false &&      ===> 0
 *
 * control Flow
 *
 */
/** Ternary Operator */

// var color = "green";

// if (color == "red") {
// 	console.log("your Fav Color is " + color);
// } else {
// 	console.log("you don't have any fav colors ");
// }

// color == "red"
// 	? console.log("your Fav Color is " + color)
// 	: console.log("you don't have any fav colors ");

/**
 * (condition)? true line : false Line
 */

// for (var i = 0; i <= 5; i++) {
// 	console.log(i);
// }

// while(){}
/**  */

// var fname = prompt("Enter Your Name");
// console.log(fname);
// var num1 = Number(prompt("Enter Num1", 20)); // string
// var num2 = Number(prompt("Enter Num2", 30)); // string
// console.log(num1 + num2);

// var fname = prompt("Enter Your Name", "Default Name");
// console.log("Your name is : " + fname);

// alert("you deleted this item");

// var result = confirm("Are You sure you want to buy this course");
// result
// 	? console.log("Course added to your list")
// 	: console.log("operation cancelled");

// document.writeln("Welcome PWD");
// document.writeln("<h1 style='color:green'>Hello at ITI</h1>");
// document.writeln("<img src='./1.jpg' />");

// var fname = "hello at iti";

// console.log(fname.slice(1));
// var result = fname.split("");
// console.log(fname.trim() + "ITI");
// console.log(fname.trimStart() + "ITI");
// console.log(fname.trimEnd() + "ITI");
// console.log(fname[0]); // get

// var output = fname.concat(" Assuit Branch");
// console.log(output);
// console.log(fname);

// console.log(fname.length);
// for (var i = 0; i < fname.length; i++) {
// 	console.log(fname[i]);
// }
