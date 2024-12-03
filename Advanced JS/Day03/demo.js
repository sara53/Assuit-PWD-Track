// function Person(fname = "", lname = "", age = "") {
// 	this.fname = fname;
// 	this.lname = lname;
// 	this.age = age;
// }

// Person.prototype.display = function () {
// 	console.log(this.fname + " " + this.lname);
// };

// function User(fname, lname, age, password) {
// 	Person.call(this, fname, lname, age); //
// 	this.password = password;
// }
// User.prototype = Object.create(Person.prototype); // refernce

// User.prototype.generatePassword = function () {
// 	console.log(this.password.toUpperCase() + "#$@" + this.password.slice(3));
// };

// var myUser = new User("Ahmed", "ali", 30, "ahmedALI123");
// myUser.display();
// myUser.generatePassword();
// var p1 = new Person("ali", "ahmed", 25);
// var p2 = new Person("mona", "fouad", 20);

// p1.__proto__.display();
// console.log(p1.__proto__ == Person.prototype); // true
//console.log(Person.prototype);
//console.log(Person.prototype.__proto__ == Object.prototype);
// //prototype Object
// var p3 = new Person();

// console.log(p1);
// prototype -- Object -- {methods} -- display

/**
 * new
 * --- function Constructor -- create objects
 * -- create Empty Object
 * -- this = {}
 * -- return {}
 */

// var arr = [];
// Array.prototype.push = function () {
// 	console.log("hello assuit");
// };

// arr.push("ali");
// console.log(arr);

// var result = Object.create(x);/

// console.log(result.x);

// function Shape() {
// 	// if (this.constructor.name == "Shape") {
// 	// 	throw "No Object";
// 	// }
// }

// // var x = new Shape();
// console.log(x);
// Shape.prototype.area = function () {
// 	throw "Method is not implemented";
// };
// Shape.prototype.piermer = function () {
// 	throw "Method is not implemented";
// };

// function Circle(r) {
// 	this.r = r;
// 	Shape.call(this);
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.area = function () {
// 	// override
// 	console.log("Welcome");
// };
// var c = new Circle();

// c.area();

function Shape(w, h) {
	var height = h;
	this.width = w;
	Object.defineProperty(this, "pet", {
		get: function () {
			return height;
		},
		set: function (value) {
			height = value;
		},
	});
}
var c = new Shape(10, 60);
c.pet = 400; // set
console.log(c.pet); // get
