// // this is try

// // console.log("hellow ");
// // console.log("hellow");
// // let a = 45;

// // try {
// //     console.log(a);
// // } catch {
// //     console.log(`Caught an error is not defined`);

// // }

// // console.log("hellow2 ");
// // console.log("hellow2");


// // ARROW FUNCTION

// // const sum = (a, b) => {
// //     console.log(a + b);
    
// // }


// // const cube = (a) => {
// //     return a*a*a;
     
// // }

// // implicite reture //

// // const fun = (a, b) =>
// //     a * b;



// // SET TIMEOUT //

// console.log("hellow world");
// console.log("wellcome to world ");

// setTimeout(() => {
//     console.log("ram");
// }, 4000);


// // SET INTERVAL //


// // setInterval(() => {
// //     console.log("ram");
// // }, 2000);

// clearInterval(ID ); // THIS HELPS TO STOP THE SET INTERVAL EHICH RUN INFINITE TIME  IN EACH SECOND  "2000" //


// const student = {
//     name: "ram",
//     marks: 95,
//     prop: this,
// };


//question write a Arrow function that return the square of number "n"

// question

// let squ = (n) => {
//     console.log(n * n);
// }

// squ(5);



// question 2 //
 
// let id = setInterval(() => {
    
//     console.log("hellow world");
// }, 2000)

// //clsear interal to stop the value //
// setTimeout(() => {
//     clearInterval(id);
// }, 10000)


// PRATICE QUESTION JS
// finding avrage value of number //

const arrayAvarag = (a, b,c,d,e,f) => {
    let avg = (a + b + c + d + e + f) / 6;
    console.log("the avarage value is ",avg);
}

arrayAvarag(10, 20, 30, 40, 75, 20);


// odd or even checker

// const isEven = (n) => {

//     if (n % 2 == 0) {
//         console.log("the number is even");
//     }

//     else {
//         console.log("the number is odd");
//     }
// }

// isEven(8);

// find output

// const object = {
//     message: 'hellow , world',

//     logomessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logomessage, 1000);



let length = 4;

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback) {
        callback();
    },
};

object.method(callback, 1, 2);
