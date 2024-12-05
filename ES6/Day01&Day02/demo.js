/**
 * var
 * ---------------------------
 * == reassign
 * == redeclaration
 * == hoisting
 * == added to window object
 * == function scope
 * --------------------------------------
 * * let
 * --------------------------------------
 * == reassign
 * == can't redeclare
 * == can't be hoisting
 * == not added to window object
 * == block scope
 * --------------------------------------
 * * const
 * --------------------------------------
 * == can't reassign
 * == can't redeclare
 * == can't be hoisting
 * == not added to window object
 * == block scope
 */

// const PI = 3.14;
// PI = 2;
// console.log(PI);

// function printValues() {
// 	let trackName = "PHP";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(trackName);
// 	}
// }

// printValues();

// const arr = ["ali"]; // reference

// arr.push("ahmed");

// console.log(arr);
/*** -------------------Speard Operator------------------ */
// var arr1 = ["mona", 1, true];
// var arr2 = [{ id: 1, name: "test" }, ...arr1, 1, 2, 4]; // new location

// arr1.push("new Value");
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// let arr = [1, 3, 90, 50, 4];

// console.log(Math.max(...arr));
// rest params
// function getData(x = 0, y = 0, ...z) {
// 	console.log(z);
// }

// getData("mona", "ahmed", 1, true, "alaa");

// destructuring
// let arr = ["mona", "ahmed", true, 6, 9, "hello"];

// // rest params
// let [x, ...y] = arr;

// console.log(" x : ", x);
// console.log(" y : ", y);

// let [, , z] = arr;
// // let x = arr[0];
// // let y = arr[1];

// let person = {
// 	products: [1, 2, 3],
// 	fname: "ahmed",
// 	lname: "ali",
// 	age: 25,
// 	color: "red",
// };

// // let { fname: fname, color: color } = person;
// let { fname, color, products } = person;

// console.log("fname : ", fname);
// console.log("color : ", color);
// console.log(products);

//let [x, y] = [1, 3, 5];
//
// function useState(a) {
// 	return [
// 		a,
// 		function () {
// 			console.log("hello");
// 		},
// 		3,
// 		4,
// 	];
// }

// let [x, y] = useState(true);

// console.log(x);
// y();
/**---------------------------------------- */
// expression
// let sum = function (x, y) {
// 	return x + y;
// };
// // statement

// function add(x, y) {
// 	return x + y;
// }
// arrow function
// let sum = (x = 0, y = 0) => {
// 	return x + y;
// };

// console.log(sum(4, 5));

// let sayHello = (_) => {
// 	console.log("Hello");
// };

// let sqaure = (x, y) => {
// 	console.log("ali");
// 	return x * x;
// };
// let sum = (x, y) => x + y;

// let square = (x) => {
// 	console.log("sdlfl");
// 	return "alf";
// };

// console.log(sum(5, 6));

/**================== */

// var fname = "ahmed";
// let person = {
// 	fname: "ali",
// 	display: () => {
// 		setTimeout(function () {
// 			console.log(this.fname); //
// 		}, 2000);
// 	},
// };

// person.display(); // person

// let fname = "hello at iti";

// // includes -- startWith -- trim()
// console.log(`Welcome

//     ${fname}

//     `);
/**-----------------
 * === Array API
 * ----------------------
 * == find
 * == findIndex
 * == every
 * == some
 * == map
 * == foreach
 * == filter
 * == reduce -- value , index, arr --
 * --------------- */

//let arr = [10, "mona", true, "hello"];
// let products = [
// 	{
// 		id: 1,
// 		name: "book",
// 		price: 200,
// 		cate: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Pen",
// 		price: 100,
// 		cate: "school",
// 	},
// 	{
// 		id: 3,
// 		name: "Sumsung phone",
// 		price: 100,
// 		cate: "electric",
// 	},
// 	{
// 		id: 4,
// 		name: "Notebook",
// 		price: 100,
// 		cate: "school",
// 	},
// 	{
// 		id: 5,
// 		name: "mouse",
// 		price: 100,
// 		cate: "electric",
// 	},
// ];

//products.forEach((value, index) => console.log(value.name));

// let result = products.filter((item, index) => {
// 	return item.id != 1;
// });
// console.log(result);
// // return []
// var result = arr.map((value, index) => {
// 	return {
// 		id: index + 1,
// 		trackName: value,
// 	};
// });
// console.log(result);
// for (let i = 0; i < result.length; i++) {
// 	document.writeln(`<h2>${result[i]}</h2>`);
// }

// false -- &&
// let arr = ["mona", "sali", "ssahmed"];

// let result = arr.find((value, index) => index % 2 == 0);
// console.log(result);

// // ||
// var result = arr.every(function (value, index) {
// 	return value.startsWith("s");
// });
// console.log(result);

// var result = arr.findIndex((x) => x.startsWith("a"));

// console.log(result);

// function findElement(x, y, z) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log("z : ", z);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) {
// 			return arr[i]
// 		}
// 	}

// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("====================");
// }
/**========================================= */

// function greet() {
// 	console.log("First");
// 	second();
// 	console.log("Third");
// }
// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);
// 	console.log("After SetTimeout");
// }

// greet();

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// console.log("Second");
// console.log("Third");

// var products;

// setTimeout(() => {
// 	products = [
// 		{ id: 1, name: "book", price: 300 },
// 		{ id: 2, name: "Pen", price: 400 },
// 		{ id: 3, name: "phone", price: 6000 },
// 	];
// 	setTimeout(() => {
// 		var product = products.find((product) => product.id == 1);
// 		console.log(product);
// 	}, 1000);
// }, 2000);

// Promise(function (x, y) {
// 	x();
// 	y();
// });
/**
 * === Request
 *   -- pending
 *   -- fulfilled
 *   -- rejected
 *
 *
 */

// let myPromise = new Promise(function (x, y) {
// 	//x("ali");
// 	y("Error message");
// });

// myPromise
// 	.then(function (data) {
// 		console.log(data);
// 		console.log("Hello then");
// 	})
// 	.catch(function (myError) {
// 		console.log(myError);
// 		console.log("Reject Fun");
// 	});

let response = [
	{ id: 1, name: "book", price: 300 },
	{ id: 2, name: "Pen", price: 400 },
	{ id: 3, name: "phone", price: 6000 },
];

function getAllProducts() {
	return new Promise((x, y) => {
		var products = response;
		products ? x(products) : y("Error on getting Products List");
	});
}

function getProductById(id, products) {
	return new Promise((resolve, reject) => {
		var product = products.find((product) => product.id == id);
		product ? resolve(product) : reject("Error on getting product details");
	});
}

function getName() {
	return "mona";
}
// getAllProducts()
// 	.then((products) => {
// 		return getProductById(2, products);
// 	})
// 	.then((product) => {
// 		console.log(product);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function execute() {
// 	try {
// 		let products = await getAllProducts(); // promise
// 		let product = await getProductById(2, products);
// 		console.log(product);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function getAllUsers() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// getAllUsers();
// a = 3;
// b = 4;

// a = 4;
// b = 3;
// javascript;
