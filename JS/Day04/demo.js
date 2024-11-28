// var img = document.getElementById("img1");
// var link1 = document.links[0];

// function execute() {
// 	//toggle
// 	if (img.hasAttribute("class")) {
// 		img.removeAttribute("class");
// 	} else {
// 		img.setAttribute("class", "info");
// 	}
// 	//console.log(img.hasAttribute("alt"));
// 	// get
// 	// console.log(img.getAttribute("src"));
// 	// console.log(link1.getAttribute("href"));
// 	// set
// 	// img.setAttribute("src", "./2.jpg");
// }

/**

    ==  <p> Welcome PD </p>

 */

// var btn = document.getElementById("btn");
// var p = document.createElement("p");
// var span = document.createElement("span");
// span.innerHTML = "Hello Span";
// var text = document.createTextNode("Welcome PD Track");
// p.setAttribute("class", "jsClass");
// p.appendChild(text);

// div.insertAdjacentElement();
//===================================

// console.log(p);
// function execute() {
// btn.before(p);
// document.body.append(p);
// var result = div.append(p, span, "Hello"); // more than one child -- Node | string
// console.log(result);
// div.appendChild(p); // one child -- Node -- return child
// }

// function sum(x){} /// typescript//
// var div = document.getElementById("parent");

// function execute() {
// 	div.remove();
// }
/**============================================ */
// BOM-- > Browser Object Model
// window --> object
/***********************************************/
// var myWind;
// function openWindow() {
// 	myWind = window.open("about.html", "", "width=200,height=200");
// }
// function closeWindow() {
// 	myWind.close();
// }
// function moveToWindow() {
// 	myWind.moveTo(300, 300);
// }
// function moveByWindow() {
// 	myWind.moveBy(-100, -100);
// }
// function resizeToWindow() {
// 	myWind.resizeTo(400, 400);
// }
// function resizeByWindow() {
// 	myWind.resizeBy(100, 100);
// }
/**=================
 *
 *
 * ---- setTimeOut
 *
 * --- setInterval
 *
 * =================== */

// setTimeout(function () {
// 	console.log("Hello");
// }, 3000);
// /**================================ */
// var i = 0;
// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval); // stop interval
// }, 5000);
/**================================ */
// var span = document.getElementById("output");
// var myInterval;
// var i = 0;
// function start() {
// 	myInterval = setInterval(function () {
// 		span.innerHTML = ++i;
// 	}, 1000);
// }
// function stop() {
// 	clearInterval(myInterval);
// }

// var span = document.getElementById("output");

// function startDownload() {
// 	span.style.display = "block";

// 	setTimeout(function () {
// 		span.innerHTML = '<a href="#">click here</a>';
// 	}, 3000);
// }
/** Events */
//attach function
// var p = document.getElementById("info");
// var btn = document.getElementById("btn");

// function changeContent() {
// 	p.innerHTML = "Welcome PD";
// }
// function changeStyle() {
// 	p.style.background = "green";
// }
// function changeStyle(color) {
// 	p.style.background = color;
// }

// changeContent(Event object); //

// btn.onclick = changeContent;

// btn.onclick = function () {
// 	changeStyle("orange");
// };

//js Engine

// btn.onclick = changeContent;
// btn.onclick = changeStyle;

// btn.onmouseenter = changeStyle;
/**===========AddEventListener========== */

// var p = document.getElementById("info");
// var btn = document.getElementById("btn");

// function changeContent() {
// 	p.innerHTML = "Welcome PD";
// }
// function changeStyle(e) {
// 	console.log(e);
// 	p.style.background = "green";
// }

// function execute() {
// 	console.log("Fired");
// }
// btn.addEventListener("click", changeContent);
// btn.addEventListener("click", changeStyle);

// function first() {
// 	console.log("first");
// }
// function second(e) {
// 	e.stopPropagation();
// 	console.log("second");
// }
// function third(e) {
// 	// e.stopPropagation();

// 	console.log("Third");
// }

// var input = document.getElementById("input1");
// var span = document.getElementById("output");

// input.addEventListener("focus", function () {
// 	input.style.border = "2px solid blue";
// });
// input.addEventListener("blur", function () {
// 	input.style.border = "2px solid orange";
// });
// input.addEventListener("input", function (e) {
// 	console.log(e.target.value);
// 	if (input.value.length > 3) {
// 		input.style.border = "2px solid green";
// 		span.style.display = "none";
// 	} else {
// 		input.style.border = "2px solid red";
// 		span.style.display = "block";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log("Success");
// }

/**-----------------location---------- */
// function execute() {
// location.reload();
// location.assign("https://www.google.com.eg/");
// location.replace("https://www.google.com.eg/");
// location.pathname = "/about.html";
// console.log(location.pathname);
// location.href = "https://www.google.com.eg/";
// console.log(location.href);
// }
/***********************************************--- */
// var parent = document.getElementById("parent");
// console.log(parent.lastChild);
// console.log(parent.lastElementChild);
