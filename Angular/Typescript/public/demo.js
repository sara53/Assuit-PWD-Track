"use strict";
// inheritance
// class Person {
// 	constructor(public id: number, public name: string, public age: number) {}
// 	display(): void {
// 		console.log(`${this.name} ${this.age}`);
// 	}
// }
// class User extends Person {
// 	constructor(id: number, name: string, age: number, public password: string) {
// 		super(id, name, age);
// 	}
// 	// override
// 	override display(): void {
// 		console.log("new Display");
// 	}
// 	generatePassword() {
// 		console.log("new Code");
// 	}
// }
// let myUser = new User(1, "ali", 25, "aliwe");
// myUser.display(); //
// hide data -- Encapsulation
// class Person {
// 	constructor(public id: number, public name: string, private age: number) {}
// 	get getAge() {
// 		return this.age;
// 	}
// 	set setAge(value: number) {
// 		this.age = value;
// 	}
// }
// let p1 = new Person(1, "ali", 25);
// p1.setAge = 233; // set
// console.log(p1.getAge); // get
// p1.setAge(333); // p1.name = 'name' // set
// console.log(p1.getAge()); // 333 // p1.name//get
/**=================================================== */
// abstract
// abstract class Person {
// 	constructor() {}
// 	display() {}
// }
/**=================================================== */
// interface IProduct {
// 	id: number;
// 	name: string;
// 	price: number;
// 	// discount: (rate: number) => number;
// }
// let products: IProduct[] = [
// 	{
// 		id: 2,
// 		name: "book",
// 		price: 20,
// 	},
// 	{
// 		id: 3,
// 		name: "pen",
// 		price: 20,
// 	},
// ];
// interface IBook {
// 	id: number;
// 	title: string;
// }
// class Product implements IProduct, IBook {
// 	constructor(
// 		public id: number,
// 		public name: string,
// 		public price: number,
// 		public title: string
// 	) {}
// 	discount(rate: number): number {
// 		return this.price * rate;
// 	}
// }
// class X extends Product {}
/**=============== */
// enum fontStyle {
// 	italic, //0
// 	normal, //1
// 	bold, //2
// }
// let p = fontStyle.italic;
// let span = fontStyle.bold;
/** Admin -- user -- guest */
// enum Role {
// 	Admin,
// 	User,
// 	Guest,
// }
// function execute(role: Role) {
// 	if (role == Role.Admin) {
// 		console.log("View DashBoead");
// 	}
// }
// execute(Role.User);
