// Your code goes here

//document.addEventListener("DOMContentLoaded", function(e) {
 // console.log(e); 
//});

const paragraph = document.querySelector("p");


document.addEventListener("DOMContentLoaded", function () {

    paragraph.textContent = "This is really cool!";

    console.log("The DOM has loaded")
}
    
);


console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  //const p = document.querySelector('#text')
//addEventListener("DOMContentLoaded", (event) => {

  //  p.textContent = "This is really cool!"
//})