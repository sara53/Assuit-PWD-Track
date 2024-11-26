// function sum(x, y) {
// 	console.log(" x : ", x);
// 	console.log(" y : ", y);
// 	var result = x + y;
// }

// result : 7
// sum(); // valid
// sum(3); // valid

// sum( 10, 20, 40, 60 ); // valid

// sum("mona", "ahmed");
// console.log("===================");
// sum(true, true);
// console.log("===================");
// sum(5, "6");
// console.log("===================");

// sum(3, 5);
// /**========== */
// console.log("--------------");
// sum(2, 7);
// /**========== */
// console.log("--------------");
// sum(20, 50);

// function sayHello() {
// 	console.log("Welcome at ITI");
// }
// console.log(sayHello);
// function sayHello(x, y) {
// 	console.log(x + y);
// }
// console.log(sayHello);

// sayHello("Dotnet"); // valid

// function

// function add(a, b) {
// 	var result = a + b;
// 	return [10, 20];
// }

// console.log(add(3, 4));

// var result = add(4, 5);

// console.log(result * 2);

// /** ============== */

// console.log(add(10, 20));

// function sum(x, y) {
// 	var result = x + y;
// }

// var output = sum(4, 5);

// console.log(output);

// display(); // function call

// built in js
// console.log(Number("10"));

// statement -- declaration
// function add(x, y) {
// 	x = x || 0;
// 	y = y || 0;

// 	console.log(" x : ", x);
// 	console.log(" y : ", y);
// 	console.log(x + y);
// }

// add(2, 5);
// function expression
// var result = function (x, y) {
// 	return x + y;
// };

// console.log(result(5, 7));

// var sayHello = function () {};

/** =================================== */

// console.log(fname);

// function sum(x, y) {
// 	console.log(x + y);
// }
// sum(3, 4);
// result(3, 4);
// var result = function (x, y) {
// 	console.log(x + y);
// };

// function sayHello() {
// 	console.log("Welcome");
// }

// sayHello("qww");
// var fname = "mona";
// function test(x) {
// 	console.log(x);
// }

// test(fname);
// console.log("=======");
// test("mona");

// var fname = "mona";
// var trackName = "PHP";

// var dotNet = function (supName) {
// 	console.log(" Dot net :  Supervisor :" + supName);
// };
// function pd(supName) {
// 	console.log(" PD:   Supervisor  : " + supName);
// }

// var mearn = function () {
// 	console.log("Welcome Mearn Track");
// };

// function greet(x, name) {
// 	x(name);
// }

// greet(dotNet, "ahmed ali");
// console.log("------------");
// greet(pd, "mona kareem");
// console.log("------------");
// greet(function (x) {
// 	console.log("IOT :", x);
// }, "mostafa");

// greet(function () {
// 	console.log("Welcome Dot net Track");
// });

// setTimeOut(function(){logic})
// greet("mona")
// greet(fname)
// greet(dotNet); // call back function

// greet("mona")
/**================ */
// console.log("----------------");
// greet(pd);
// console.log("------------");
// greet(mearn);

// function sum(x, y) {
// 	return x + y;
// }

// function square(a) {
// 	console.log(a * a);
// }

// console.log(square(sum(3, 4)));
// var add = function (x, y) {
// 	console.log(x + y);
// 	return "sondos";
// };
// var mult = function (x, y) {
// 	console.log(x * y);
// };
// var div = function (x, y) {
// 	console.log(x / y);
// };

// function handelOperation(x, y, myFunction) {
// 	myFunction(x, y);
// }

// handelOperation(3, 4, add); // 7
// handelOperation(3, 4, mult); // 12
/**=================
 * length
 *--------------------------------
 *== push
  == unshift
  == pop
  == shift
  == splice == search
  == concat
  == reverse
  == join
  == arr.sort(/** callback function */
/* ====================== */

// var arr = [10, 20, 60, 1, 5];
// arr.sort(/** callback function */); //
// var result = arr.join("##");
// console.log(result);
// arr.reverse();
// var result = arr.concat([10, 20, 40]);
// arr.shift();
// arr.shift();
// arr.unshift("ali");
// arr.unshift(3);
// arr.push("new Element");
// arr.push(5);
// console.log(arr);
// console.log(result);
// // arr[0] = "pd"; // set

// console.log( arr[ 20 ] ); // undefined

// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// arr[0]; // get
// console.log(arr[0]); // 10
// console.log(arr[1]); // 10
// console.log(arr.length);

/**
 *===== PI == props
 -------------Methods--------------------
    *===== round
    *===== floor
    *===== ceil
    *===== random
    *===== max
    *===== min
    *===== sqrt
    *===== pow
    *===== sign
    *===== abs

 */

// console.log(Math.sin((90 * Math.PI) / 180));
// console.log(Math.max(...[10, 30, 50, 6]));
// console.log(Math.min(10, 3, 5, 7, 90));
