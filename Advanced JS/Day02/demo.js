// var fname = "mona"; // add on window object

// function getName() {
// 	console.log("Welcome");
// }

// getName();

// //window.getName(); // window Object // caller fun -- window

// var person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	display: function () {
// 		console.log("from display");
// 	},
// };

// person.display(); //person Object
// this --> window
// var fname = "ali";
// var fname = "ali";
// function getName() {
// 	console.log(this.fname);
// }

// getName();
// var person = {
// 	fname: "mona",
// 	lname: "ahmed",
// 	display: function () {
// 		getName.call(this);
// 	},
// };

// person.display(); // person

// person.display(); //person
// call -- bind -- apply
// this -- window
// var person1 = {
// 	fname: "ahmed",
// 	lname: "ali",
// 	display: function (x, y) {
// 		console.log(x + " " + this.fname + " " + this.lname + " " + y);
// 	},
// };

// var person2 = {
// 	fname: "mona",
// 	lname: "mohamed",
// };

// var result = person1.display.bind();
// result(":)", "PD");
// var output = person1.display.bind(person2);
// output(":(", "ITI");

// function() -- call() -- apply

// person1.display.apply(person1, [":)", "PD"]);
// // console.log("=========================");
// person1.display.apply(person2, [":(", "ITI"]);

// person1.display(":)", "PD");
// person1.display.call(person1, ":)", "Pd"); // call function
// console.log("=========================");
// person1.display.call(person2, ":(", "ITI");
// that pattern
// var fname = "ahmed";
// var person = {
// 	fname: "ali",
// 	display: function () {
// 		var that = this; // person
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

// person.display(); // person

// setTimeout -- window
// ali 18
// ahmed 22
/** --------------------------------------------- */
// var products = [
// 	{
// 		id: 1,
// 		name: "Book",
// 		price: 300,
// 		quantity: 20,
// 		category: "school",
// 		discount: function () {},
// 	},
// 	{
// 		id: 2,
// 		name: "Pen",
// 	},
// ];

// document.writeln(`<h1>Product Name : ${products[0].name}</h1>`);
// document.writeln(`<p>Price :${product[0].price}</p>`);
// document.writeln(`<p>Category :${product1.category}</p><hr/>`);
// document.writeln(`<h1>Product Name : ${product2.name}</h1>`);
// document.writeln(`<p>Price : ${product2.price}</p>`);
// document.writeln(`<p>Category : ${product2.category}</p><hr/>`);
/** Factory Pattern */

/** -------------------------------------------- */
// var fname = "ali";
// var lname = "ahmed";
// var age = 25;
// var myKey = "age";

// var person = {};

// person[1] = "120";
// var person = {
// 	fname,
// 	lname,
// 	[myKey]: 25,
// 	display() {
// 		console.log("hello");
// 	},
// };

// console.log(person);
// function generateProduct(id, name, price) {
// 	var product = {
// 		id,
// 		name,
// 		price,
// 		discount: function () {
// 			return this.price * 0.5;
// 		},
// 	};

// 	return product;
// }

// var product1 = generateProduct(1, "book", 400);
// var product2 = generateProduct(2, "Pen", 200);

// console.log(product1.discount());
// console.log(product2.discount());
