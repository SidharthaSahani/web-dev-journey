// getEementbyclass
// let smallimg = document.getElementsByClassName("oldimg");

// for (let i = 0; i < smallimg.length; i++){
//     smallimg[i].src = "Peter_Griffin.png";
//     console.log(`the image of .${i} index is changed`);
// }


// getelementbytagName

// document.getElementsByTagName("p");


// QUERY SELECTOR //

// document.querySelector('p'); // select first P element
// document.querySelector('#myId'); // SELECTS FIRST ELEMENT WITH ID = MYid
// cocument.querySelector(".mycalss"); // Selects first element with class = myClass
// document.querySelector("oldimg");
// //  TO SELECT ALL ELEMENT
// document.querySelectorAll(".oldimg");
// document.querySelectorAll("p");
  
// let links = document.querySelector(".link a");

// for (let i = 0; i < links.length; i++){
//     links[i].style.color = 'red';
// }


//Question

// let para1 = document.createElement('p');
// para1.innerText = "hey i am red ";
// document.querySelector('body').append(para1);
// para1.classList.add('red');

// let head3 = document.createElement('h3');
// head3.innerText = "hey  i am blue ";
// document.querySelector('body').append(head3);
// head3.classList.add('blue');
// //

// let div = document.createElement("div");
// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');
// h1.innerText = "i am innder div";
// para2.innerText = " i am paragraph";

// div.append(h1);
// div.append(para2);
// div.classList.add('box');
// document.querySelector('body').append(div);


/*Qsl. Create a new input and button element on the page using JavaScript only. Set the
text of button to "Click me' */

// let input = document.createElement("input");

// document.querySelector('body').append(input);

// let btn = document.createElement("button");
// btn.innerText = "click me ";
// document.querySelector('body').append(btn);


/* Qs2. Add following attributes to the element :
Change placeholder value of input to "username"
Change the id of button to "btn */

// let input = document.createElement("input");
// input.placeholder = "username ";
// document.querySelector('body').append(input);

// let btn = document.createElement("button");
// btn.innerText = "click me ";
// document.querySelector('body').append(btn);


/* Qs3. Access the btn using the querySelector and button id. Change the button background 
color to blue and text color to white. */

// let input = document.createElement("input");
// input.placeholder = "username ";
// document.querySelector('body').append(input);

// let btn = document.createElement("button");
// btn.innerText = "click me ";
// document.querySelector('body').append(btn);
// btn.classList.add('red');



/* Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. 
Change its color to purple*/

// let h1 = document.createElement("h1");
// h1.innerText = "<u>DOM Practice </u>";
// document.querySelector('body').append(h1);
// h1.classList.add('h2');


/* Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
where Delta is bold.*/

// let p = document.createElement("p");
// p.innerText = "Apna College <b> Delta </b>  Practice";
// document.querySelector('body').append(p);