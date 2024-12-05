// let person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	age: 25,
// 	color: "red",
// };

// // var result = Object.keys(person);
// var result = Object.entries(person); //[[key,value],[]]
// console.log(result);

//

// let arr = ["mona", "ahmed", 20];

// // function
// arr[Symbol.iterator] = generateEventNumbers;

// let person = {
// 	fname: "ali",
// 	age: 20,
// 	color: "red",
// };
// person[Symbol.iterator] = getEven; //
// // arr iterable  -- generator -- iterator
// function* getEven() {
// 	// value
// 	for (let key in this) {
// 		yield `${key} : ${this[key]}`;
// 	}
// }

// for (let i of person) {
// 	console.log(i);
// }
// function generateEventNumbers() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			step += 2;
// 			if (step <= 10) {
// 				return {
// 					value: step,
// 					done: false,
// 				};
// 			} else {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			}
// 		},
// 	};
// }

// for (let i of person) {
// 	console.log(i);
// }
// var iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
/**
 * 1- Symbol.iterator : function
 * 2- function will return Object
 * 3-Object has next function
 * 4- next function return {value,done}
 *
 *
 */
// key Symbol.iterator = function
// console.log(arr);
// let person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	age: 25,
// };

// person[Symbol.iterator] = function () {};

// console.log(person);

// for (let i of person) {
// 	console.log(i);
// }
// console.log("==========");
// for (let value of arr) {
// 	console.log(value); // value
// }
// index
// for (let i in arr) {
// 	console.log(arr[i]);
// }
// for (let key in person) {
// 	console.log(key, " : ", person[key]);
// }

// let x = Symbol(); //
// let product = {
// 	id: 1,
// 	name: "book",
// 	[x]: function () {
// 		console.log("discount");
// 	},
// };

// console.log(product[x]);

// let arr = ["mona", "ali", "ahmed"];

// arr[Symbol.iterator] = getValues;

// function getValues() {
// 	let count = 0;

// 	return {
// 		next: () => {
// 			if (count == this.length) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return { value: this[count++], done: false };
// 			}
// 		},
// 	};
// }
// // iter.next() // this
// for (let i of arr) {
// 	console.log(i);
// }

/** */
// parent Class -- superClass
class Person {
	#name; // private
	/// overload
	constructor(id = "", name = "", lname = "") {
		this.id = id;
		this.#name = name;
		this.lname = lname;
	}
	//override

	display() {
		console.log(`${this.name} ${this.lname}`);
	}

	get getName() {
		return this.#name;
	}
	set setName(value) {
		this.#name = value;
	}
}

// let p1 = new Person(1, "ali", "ahmed");

// p1.setName = "new Name"; // set

// console.log(p1.getName); // get

// p1.setName("PD"); //set
// console.log(p1.getName()); // get
// // child class -- subclass
class User extends Person {
	constructor(id, name, lname, password) {
		super(id, name, lname);
		this.password = password;
	}
	// override
	display() {
		super.display();
		console.log(this.password);
	}

	generatePassword() {
		return this.password.toUpperCase() + this.password.slice(2) + "@#$%";
	}
}

// let myUser = new User(1, "mona", "ahmed", "MONA");
// myUser.display();
// console.log(myUser.generatePassword());

// class Person {
// 	constructor(id, name, age) {
// 		if (this.constructor === Person) {
// 			throw "Can't take an object from an abstract class";
// 		}
// 		this.id = id;
// 		this.name = name;
// 		this.age = age;
// 	}
// 	display() {
// 		throw "Method Not implemented";
// 	}
// }
// //abstraction
// class User extends Person {
// 	constructor(id, name, age, password) {
// 		super(id, name, age);
// 		this.password = password;
// 	}
// 	display() {
// 		console.log(`${this.name} : ${this.password}`);
// 	}
// 	// User.myStaticMethod()
// 	static myStaticMethod() {
// 		console.log("Hello");
// 	}
// }

// let myUser = new User(1, "ali", 25, "ALi");
// myUser.display();

// let myUser = new Person() // person
/**======================================== */
//import sayHello, { add, square, trackName } from "./main.js"; // export naming
// import * as all from "./main.js"; // export naming

// console.log(all.add(4, 5));
// console.log(all.square(4));
// all.default(); // sayHello

// console.log(all.trackName);

/**================================================= */
// let person1 = {
// 	fname: "Ali",
// 	lname: "ahmed",
// 	age: 25,
// };

// let person2 = {
// 	color: "Red",
// };

// let result = Object.assign({}, person1, person2);

// console.log("person1", person1);
// console.log("person2", person2);
// console.log(result);
/** clean code */

// function showData(options = {}) {
// 	let defaultValues = {
// 		fname: "default fname",
// 		age: 1,
// 		address: "default Address",
// 	};

// 	Object.assign(defaultValues, options);

// 	console.log(`fname :${defaultValues.fname}
//     age: ${defaultValues.age}
//     address: ${defaultValues.address}

//             `);
// }

// showData({ fname: "ali" });

/** ============= */

// let person = {
// 	fname: "ali",
// 	age: 25,
// };

// person.age = -20; // validate
// console.log(person.color); // undefined
// person.fname = 3; // set fname = string
