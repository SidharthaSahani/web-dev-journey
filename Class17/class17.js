// let i = 15;
// for (i = 1; i <= 15; i = i+2){
//     console.log(i);
// }



// console.log("this is break ")
// let n = 1;
// for (n = 15; n >= 1; n = n - 2){
//     console.log(n)
// }


// let i = 10;

// for (i = 10; i>=2; i = i - 2){
//     console.log(i);
// }

// loops table

// let n = prompt("enter the number");
// n = parseInt(n);
// let i;
// for (i = n; i <= n * 10; i = i + n){
//     console.log(i);
// }


// NESTED loop

// let i = 1;
// let j = 1;

// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= i ; j++){
//         console.log(i+= " *");
//     }
// }


// while loops //

// let guess = prompt("enter the name ");

// fav = "rama";

// while ((guess != fav) && (guess != "quit")) {

//      guess = prompt("wrong try again ");
// }

// if (guess == fav) {
//     console.log("you guess write");
    
// }

// else  {
//     console.log("yoou quit");
// }




// break loop//

//  LOOP WITH ARRAYS //


// TO DO APP //

let todo = [];

let req = prompt("enter the request ");

while (true) {
    if (req == "quit") {
        console.log("qutting app");
        break;
    }


    if (req == "list") {

        for (task of todo) {
            console.log(todo);
        }
        
    }

    else if (req == "add") {
        let task = prompt("enter the task to add");
        todo.push(task);
        console.log("task is added");
    }

    else if (req == "delete") {
        let idx = prompt("plsese enter task index");
        todo.splice(idx, 1);
        console.log("task deleted");
        
    }



    req = prompt("enter the request ");
    
    
    
    
  
}





 


  