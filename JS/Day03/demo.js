/**
 * Properties
 * -------------------------
 * ==== key : value --> [any datatype]
 * ==== methods
 * --------------------------------
 * == dotnotation
 * == subscript notation
 */
// var student = {
// 	fname: "ali", // property
// 	age: 25,
// 	address: {
// 		city: "alex",
// 		street: "ahmed str",
// 		code: 123,
// 	},
// 	favColor: ["red", "green", "blue"],
// 	// method
// 	display: function (trackName) {
// 		console.log("Welcome Display fun", trackName);
// 	},
// };

// student.display("DOTnet");
// console.log(student.display());

// var colorsArr = student.favColor;
// for (var i = 0; i < colorsArr.length; i++) {
// 	console.log(colorsArr[i]);
// }

// console.log(student.address.city);
// console.log(student["address"].city);
// console.log(student["address"]["city"]);
// console.log( student.address[ "city" ] );

// console.log(student.fname);
// set
// student["fname"] = "ahmed";
// student["age"] = 30;
// student["gender"] = "male";
// console.log(student);
// student.fname = "ahmed"; //override
// student.age = 30;
// student.gender = "male"; // add
// get
// console.log(student.fname);
// console.log(student["fname"]);

// console.log(student.age);
// console.log(student["age"]);
// console.log(student["gender"]);

// console.log(student.age);
// console.log(student.address);

// console.log(student.gender);

// var str = "hello at iti";

// str.length; // object prop
// var result = str.charAt(0);

// var arr = [];

// arr.length
// arr.push()
/** spread operator */
// var arr1 = [1, 2, 3];
// var arr2 = arr1;
// var a = 3; // prim

// var b = a;
// a = 5;

// console.log(" a : ", a);
// console.log(" b : ", b);

// var arr1 = [10, 20, "mona"];

// var arr2 = [...arr1];

// arr1.push("new Value");
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// var div = document.getElementById("parent");
// console.log(div.children);
// console.log(document.images);
// console.log(document.links);
// var elements = document.querySelector(".info");

// console.log(elements);
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }

//var h1 = document.getElementsByClassName("head")[0];

// function execute() {
// 	h1.innerHTML = "<h1>Welcome</h1>";
// 	// h1.innerText = "<h1>Hello At ITI</h1>"; //override
// 	// console.log(h1.innerText); // get
// }
// var input1 = document.querySelector("#input1");
// var span = document.querySelector(".show");

// var inputs = document.getElementsByName("choose");

// function execute() {
// 	for (var i = 0; i < inputs.length; i++) {
// 		if (inputs[i].checked) {
// 			console.log(inputs[i].value);
// 		}
// 	}
// 	// input1.value = "ITI";
// 	// span.innerHTML = input1.value;
// }

var p = document.getElementById("head");

function execute() {
	p.classList.toggle("jsClass");
}
// function execute() {
// 	// set
// 	// p.className += " jsClass";
// 	// get
// 	// console.log(p.className);
// }
// function execute() {
// 	// p.style.backgroundColor = "#2f385a";
// 	// p.style.color = "#fff";
// 	// p.style.padding = "3em";
// 	p.style.cssText = "background:#2f385a; padding: 3em;color:#fff";
// }
