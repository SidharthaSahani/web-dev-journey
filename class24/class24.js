// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("div was claickedd");
// });

// ul.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("ul was claickedd");
// });


// for (lis of lis) {
  
//     lis.addEventListener("click", function (event) {
//         event.stopPropagation();
//         console.log("li was claickedd");
//     });
// }


// calss 2


let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
 
btn.addEventListener("click", function () {

    let item = document.createElement("li");
    item.innerText = input.value;


    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";

    delBtn.classList.add("delete");

    item.append(delBtn);
    ul.appendChild(item);

    console.log(input.value);
    input.value = "";
});

let delBtns = document.querySelectorAll(".delete");
for (delBtn of delBtns) {
    delBtn.addEventListener("click", function () {
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}

ul.addEventListener("click", function (event) {
    if (event.target.this.nodeName == "button") {
        let listItem = event.target.parentElement;
        listItem.remove(listItem);
        console.log("delted");
    }
});





// PS C:\Users\T U F\OneDrive\Desktop\WEBDEVELOPMENT> echo "# web-dev-journey" >> README.md
// >> git init
// >> git add README.md
// >> git commit -m "first commit"
// >> git branch -M main
// >> git remote add origin https://github.com/SidharthaSahani/web-dev-journey.git
// >> git push -u origin main
// PS C:\Users\T U F\OneDrive\Desktop\WEBDEVELOPMENT> echo "# web-dev-journey" >> README.md




