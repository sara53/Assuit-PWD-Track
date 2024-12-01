// expression -- statement -- (Hoisting)
// var trackName = "PD Track";

// function execute() {
// 	console.log(test);
// 	var test = "ali";
// 	console.log(test);
// }

// var result = execute();

// console.log(result);

/**
    -- dotnet
    -- hello at iti
    -- Error

--------------------------
    -- dotnet
    -- Error

 */

// var result = "yousry";
// function sayHello(x) {
// 	console.log(result);
// 	return "dotnet track";
// }

// function greet(x) {
// 	var result = sayHello("Pd");
// 	return result + " at ITI";
// }

// var output = greet("react");
// console.log(output);
// global scope

// function getData() {
// 	var trackName = "react";
// 	var test = "ali";
// 	console.log(test);
// 	function sayHello() {
// 		console.log("welcome " + trackName);
// 	}
// 	return sayHello;
// }

// var result = getData();
// result();

// output -- Error

/**
 * Error --> trackName is not defined
 */
// -------------- lab (task) 0 1 2  --------
/** closure */
// function getArr() {
// 	var arr = [];

// 	for (var i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			return i;
// 		});
// 	}
// 	// i = 3

// 	return arr;
// }

// var result = getArr();
// var output = result[0]();

// result[1]();
// result[2]();
/**
 i = 0
 [
    function () {
                console.log(i);
            }
        ,
]
 i = 1

 [
    function () {
                console.log(i);
            }
        ,
        function () {
                console.log(i);
            }
        ,
   

]
i = 2
 [
    function () {
                console.log(i);
            }
        ,
        function () {
                console.log(i);
            }
        ,
         function () {
                console.log(i);
            }
   i = 3 //closure

]
 */
// var result = getArr();
// result[0]();
// 3;
// result[1]();
// 3;
// result[2]();
// 3;

/*******************/
// function sayHello() {
//     console.log(x);
// }

// function test() {
// 	var x = "pd";

// 	// inner function

// 	sayHello();
// }

// test();

// var arr = [function () {}, function () {}, function () {}];
// var person = { fname: "Ali", age: 20, address: "alex" };

// for (var key in person) {
// 	console.log(key + " " + person[key]);
// }
