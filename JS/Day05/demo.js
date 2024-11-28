// var tbody = document.getElementsByTagName("tbody")[0];

// function getAllUsers() {
// 	var xhr = new XMLHttpRequest();

// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users/5");
// 	xhr.send("");

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				var user = JSON.parse(xhr.response);
// 				var tr = document.createElement("tr");
// 				var td1 = document.createElement("td");
// 				var td2 = document.createElement("td");
// 				var td3 = document.createElement("td");
// 				td1.innerHTML = user.id;
// 				td2.innerHTML = user.name;
// 				td3.innerHTML = user.email;
// 				tr.append(td1, td2, td3);
// 				tbody.append(tr);
// 			}
// 		}
// 	};
// }

// fetch("URL"); // response -- promise -- then catch -- async wait
// // native -- ajax

// var response = {
// 	id: 1,
// 	name: "ali",
// 	product: [
// 		{ id: 1, name: "Book", price: 300 },
// 		{ id: 2, name: "Book", price: 300 },
// 	],
// 	countries: {
// 		asia: {
// 			city1: "x",
// 			city2: "2",
// 		},
// 		afica: {},
// 	},
// };

/**=============== cookies ============== */
// var expireDate = new Date();
// expireDate.setDate(expireDate.getDate() + +3);

// document.cookie = "email=ali@gmail.com;expires=" + expireDate;
// document.cookie = "username=ALI55;expires=" + expireDate;
//document.cookie = "username=mona;expires=" + expireDate;

// function saveCookie(key, value) {
// 	document.cookie = key + "=" + value + ";expires=" + expireDate;
// }
// function deleteCookie(key) {
// 	var x = new Date();
// 	x.setDate(x.getDate() - 1);

// 	document.cookie = key + "=" + " ddf" + ";expires=" + x;
// }

// deleteCookie("address");
// deleteCookie("email");
// deleteAllCookies
// hasCookie
// getCookie
//saveCookie("products", JSON.stringify(["red", "greed", "blue"]));
//saveCookie("address", JSON.stringify({ city: "benha", code: 123 }));

// function getAllCookies() {
// 	return document.cookie;
// }

// console.log("First");
// console.loGGg("Second");
// console.log("Third");

/** request == response */

// try {
// 	console.log("First");
// 	console.logg("Third");
// } catch (error) {
// 	// console.log(error); // log error
// 	document.writeln("Connection Error ... try Again");
// } finally {
// 	console.log("Hello");
// }

// function sum(x, y) {
// 	if (arguments.length == 0) {
// 		throw "pass 2 args at least";
// 	}
// 	console.log(x + y);
// }

// sum();

navigator.geolocation.getCurrentPosition(
	function (position) {
		console.log(position.coords.latitude);
		console.log(position.coords.longitude);
	},
	function () {
		// deny location
		console.log("Deny Fun");
	}
);
