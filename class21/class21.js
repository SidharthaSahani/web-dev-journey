// let num = [1, 2, 3, 4];

// let double = num.map((e) => {
//     return e * 2;
// });

// console.log(double);


// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5];

// let ans = num.filter((num) =>{
//     return num < 6;
// });


// let nums = [1, 2, 3, 4];
// let finalvalue = nums.reduce((rel, num) => { rel + num }

// );

// let arr = [1, 2, 4, 8, 2, 8, 3, 8, 7];
// let max = -1;

// for (let i = 0; i < arr.length; i++){
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }

// console.log(max);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let min = Math.max(...arr); //(... means spread value it will take whole array index in "..." 3 dots )

// console.log(min);




// const data = {
//     email: "ram@gmail.com",
//     password: 1234,
    
// };

// const dataCopy = { ...data, id: 1200 , country : 'nepal'}; // push the data in array by spread ..




//REST


// destructuring

// const student = {
//     name: "ram",
//     age: 15,
//     username: "rma@gmail.com",
//     password: "123",
//     city : 'india',
// }

// let { username, password , city = 'nepal' } = student;



//QUESTIONS


// QUESTION.1
// let num = [1, 2, 3, 4, 5, 6];

// let double = num.map((num) => {
//   return num * 2;
// }
   
// );

// let sum = 0;

// for (let i = 0; i < num.length; i++){

//     sum = sum +  num[i];
// }
// let avg =  sum / 6;

//QUESTION.2

// let arr = [1, 5, 3, 7, 8, 6,];

// let double = arr.map((el) => {
//    return  el + 5;
// });

// question.3

// let word = ["apple", "mango", "orange"];

// let value = word.map((el) => {
//     return el.toUpperCase();
     
// }
// );

//question .4

// function doubleAndReturnArgs(arr, ...args) {
//     // Double each argument in args and return a new array
//     return [...arr, ...args.map(num => num * 2)];
// }

// // Testing the function
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 5, 6));  // [1, 2, 3, 8, 10, 12]
// console.log(doubleAndReturnArgs([10, 20], 1, 2, 3));  // [10, 20, 2, 4, 6]




// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.
  
const obj1 = {
    name: "ram",
    age: 15,
    class: 12,
    gender: "male",
    
}

const obj2 = {
    location: "ktm",
    number: 144574,

    
}

const mergeObjects = {...obj1,...obj2};


    