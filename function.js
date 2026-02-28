window.onload = function() {
let test = "Page inpsector";

console.log("You earned the badge called: " + test);
}

let test1 = document.getElementsByClassName("SEB");

for (let button of test1) {

button.onclick = function() {
    window.alert("The Search Engine you chose has opened in another tab, Thank you for using this Project!");
}}

