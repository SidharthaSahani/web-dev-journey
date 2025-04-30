// function hello(){
//     console.log("hello world");

// }

// hello();

// function num()
// {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }


// num();


// function valid() {
//     age = 20;
//     if (age >= 18) {
//         console.log("he can vote");
//     }

//     else {
//         console.log("he cant vote");
//     }
// }

// valid();


// function song() {
//     console.log("tara ra raa tara raa aaa");
//     console.log("tara ra raa tara raa aaa");

// }

// song();


// function ludo() {
//     value = Math.floor(Math.random() * 6) + 1;
//     console.log( "the ludo dice value is ",value);

// }

// ludo();

// function info( name, age){
//     console.log(`${name} , ${age}`);
// }

// info("ram" , 23);


// question //

// function avg(a, b, c) {
//     console.log((a + b + c) / 3);
// }

// avg(10, 10, 10);


//question

// let i;
// function table(n) {
//     for (i = n; i <= n * 10; i=i+n) {
//         console.log(i);
   
//     }
  
// }

// table(12);
// let n = 7;

// for (let i = 1; i <= n; i = i + 1){
//     console.log(i);
// }

    // question
// let str = ["hellow" , "world" ] ;

// function concat(str)
// {
//     let result = "";
    
//         for(let i = 0; i <str.length; i++){
//             result +=str[i];
//         }

//         return result;
// }

// question 13//

// let greet = "hello"; // grobal scope //

// function changegreet() {
//     let greet = "namestay"; // function scope //
//     console.log(greet);

//     function innergreet() {
//         console.log(greet);//lexical scope //
//     }

//     // if you want to execute innergreet() than you have to call insid ethe innergreat function  "HERE INNERGREAT()"//

// }

// console.log(greet);
// changegreet();

// question 13 ENDS HERE //



// simple function that tells 10000 times I LOVE YOU "USER INPUT" //

// higher order function //
    
// let sorry = function (name , n) {
//     for (let i = 1; i <= n; i++) {
//         console.log("I love you",name);
//     }

// }

// let msg = prompt("to whome you want to say ");
// let n = prompt("how many times you want");

// sorry(msg, n);


// PRATICE QUESTION


// QUESTION 1 //

// let arr=[10, 20, 30, 5, 4, 7, 8, 6, 9, 4, 3, 12];
// let num = 10;

// let tim = function (arr, num)
    
// {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > num) {
//             console.log(arr[i]);
//         }
     
//     }
//     }
  
// tim(arr,num);

//QUESTION 2 //

// function uniqueCharacters(str) {
//     let uniqueStr = "";
//     for (let char of str) {
//         if (!uniqueStr.includes(char)) {
//             uniqueStr += char;
//         }
//     }
//     return uniqueStr;
// }

// // Example usage
// let str = "abcdabcdefgggh";
// console.log(uniqueCharacters(str)); // Output: "abcdefgh"



let country = ["Australia", "Germany", "United States of America"];

function longestName(country)
{
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++)
    {
    let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        
        if (currLen > ansLen)
        {
    ansIdx = i;
    }
    }
    return country[ansIdx];
}
    
    longestName(country);



