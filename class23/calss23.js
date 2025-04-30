// let btn = document.querySelectorAll("button");

// btn.onclick = function () {
//     console.log("the button was clicked");
// };

// for (btn of btn) {
//     btn.onclick = helo;
//     btn.onmouseenter = function () {
//         console.log("scrolled");
//     }
// }

// function helo() {
//     console.log("says hellow");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let randomcolor = getRandomcolor();
//     h3.innerText = randomcolor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolor;
    
//     console.log("color updated ");
// });

// function getRandomcolor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
    
//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let btn = document.querySelector("button");

// // btn.addEventListener("click", function () {
// //     console.log("button clicked ");
// // });

// btn.addEventListener("dblclick", function (event) {
//     console.log(event);
// } );


// let inp = document.querySelector("input");

// inp.addEventListener("keypress", function (event) {
//     console.log("key was pressed ", event.code);
// });


// let inp = document.querySelector("input");

// inp.addEventListener("keypress", function (event) {
//     console.log("key was pressed ", event.key);
// });


// let inp = document.querySelector("input");

// inp.addEventListener("input", function () {
//     console.log("Password so far:", inp.value);
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);
// });

// //Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load


// let btn = document.querySelector('input');

// btn.addEventListener("load", function () {
//     console.log("mouse out was performed");
// })


/* Qs2. Create a button on the page using JavaScript. Add an event listener to the button
that changes the button’s color to green when it is clicked.*/
 
// let btn = document.createElement("button");
// btn.innerText = "click me ";
// btn.id="but"
// document.body.appendChild(btn);


// btn.addEventListener("click", function () {
//     btn.style.backgroundColor = 'blue';
// });



/*Qs3. Create an input element on the page with a placeholder ”enter your name” and an
H2 heading on the page inside HTML.
The purpose of this input element is to enter a user’s name so it should only input
letters from a-z, A-Z and space (all other characters should not be detected).
Whenever the user inputs their name, their input should be dynamically visible inside
the heading.
[Please note that no other character apart from the allowed characters should be
visible in the heading]*/

// let input = document.querySelector("input");



// input.addEventListener("keypress", function () {
    
//     console.log(input.innerText);
// })



const input = document.getElementById('nameInput');
const heading = document.getElementById('displayName');

input.addEventListener('input', function() {
  // Allow only letters and spaces
  const filteredValue = input.value.replace(/[^a-zA-Z ]/g, '');
  heading.textContent = filteredValue;
});