// thsi code print "this is comment "
// console.log("this is comment");

/* multiple line comment 
console.log("heloow world ");

*/

// Operators //

// Arthmetic operators //

// let a=5;
// let b=6;

// console.log("a = " ,a ,  "b =",b);

// console.log("a - b =" , a - b);
// console.log("a * b =" , a*b);
// console.log("a / b =" , a/b);
// console.log("a % b = " , a % b);

// console.log("a ** b", a ** b); // it mean 5^6 ;


// UNIARY OPERATORS 


// let a=5;
// let b=6;

// console.log("a = " ,a ,  "b =",b);
// // a= a+1 ;
// // or //
// a++;
// console.log("a = ",a);


// // a= a-1 ;
// // or 
// a--
// console.log("a = ",a);

// POST INCREMENT & PRE INCREMENT //

// let a =5 ;

// console.log("a =" , a );
// console.log("a++=",a++);// first line where the value is incresed not printed  but in second line the value is printed //

// console.log("a++=",a++);// change happend after //

// console.log("a--",a--);// value is chaged here but not printed here //
// console.log("a--",a--); // the value is printed here bcz it print in second line //

// console.log("++a = ", ++a); // here the value chaged before and get printed  the value is 6 //
// console.log("++a = ", ++a); // shame hear where the value is printed  here "++a =" 7 //
// console.log("--a",--a);
// console.log("--a", --a);

// the value is decresed first and get printed //


//   ASSIGN OPERATORS //

// let a= 5;
// let b = 6;

// a += 4; // a += 4+5 =9;
// console.log(a);


//  COMPARISION OPERATORS //

/*let a= 5;
let b= 4;

console.log("a==b" , a!=b); // ture or false
console.log("a==b" , a==b); // ture or false
console.log("a===b",a===b);

console.log("a>b",a<=b);

*/

//  LOGICAL OPERATORS 

// let a= 6;
// let b= 4;

// let cond1= a > b ;
// let cond2 = a===6;

// console.log("cond1 && cond2 =",cond1 && cond2); //  AND OPERATOR //


// console.log("cond1 || cond2  = ",cond1 || cond2) ; // OR OPERATOR //

// console.log("cond1 != cond2", !(cond1) ); // NOT OPERATOR //



// CONDINATIONAL STATEMENT //

// let age=15;

// if(age==15){
//     console.log("minor");
// }

// else {
//     console.log("adult")
// }

// let num = 10;

// if (num%2===0) // if the remaiinder is 0 it means 2/10=0,5;
//     {
//     console.log("the num is even");
// }

// else {
//     console.log("the num is odd");
// }


// ELSE IF 

// let age=45;
// let gender="male";

// if(age===12){
//     console.log("the person is minor ");
// }

// else if (age==45 && gender =="female"){
//     console.log("the person is old ");
// }

// else {
//     console.log("the person is adult");
// }

        // ternary operators  
        
    //     let age=5;
    //     // let result;
    //    let result = age > 18? "adult" : "not adult "
    //     console.log(result);



        // pratice question 

        // Q1 . get user to input a number using prompt ("enter a number :") check if the number is a multiple of 5 or not .

        //  let number = prompt("enter the number ");

        //  if(number%5 == 0){
        //     console.log( number,"it is divisible by 5 " );
        //  }
        //   else {
        //     console.log(number ,"not divisible by 5");
        //   }


            // Q2. write a code which can give grades to students according to their scores .

            // 80-100= A ;
            // 70-89= B ;
            // 60-69 =C ;
            // 50 - 59 =D ;
            // 0-49 F ;

                let grade = 99;

                if(grade>=85 ){
                    console.log("A");

                }

                else if(grade>= 70 && grade<80){
                    console.log("B");
                }

                else if (grade >= 60 && grade <= 69 ){
                    console.log("C");
                }

                else if(grade>=50 && grade <= 59){
                    console.log("D");
                }

                else{
                    console.log("f");
                }



















