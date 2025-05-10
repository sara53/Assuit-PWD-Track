// class Person {
// 	// by default access class -- public
// 	public fname: string;
// 	private age: number;

// 	constructor(fname: string, age: number) {
// 		this.fname = fname;
// 		this.age = age;
// 	}

// 	display(): void {
// 		console.log(this.fname + this.age);
// 	}
// }
// class Person {
// 	constructor(public fname: string = "default", private age: number = 0) {}
// }

// let p1 = new Person();

// console.log(p1);

// class name,age,address,city,gender

// let p1 = new Person("mona", 20);
// p1.age = 40;
// let p1 = new Person("ali", 20);
// // public
// // get
// console.log(p1.age);

// p1.fname = "alaa"; // set
// p1.display();

// let p3 = new Person("string", 1);

// let p2 = new Person("mona", 30);
// console.log(p1); //{}
// console.log(p2); //{}
/**============================================ */

// class Person {
// 	constructor(public id: number, public name: string, public age: number) {}

// 	display(): void {
// 		console.log(`${this.name} ${this.age}`);
// 	}
// }

// class User extends Person {
// 	// constructor(){}
// }
