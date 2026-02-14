window.onload = function() {
let test = "Page inpsector";

console.log("You earned the badge called: " + test);

let test1 = document.getElementsByClassName("Sbtn");

for (let button of test1) {

button.onclick = function() {
    window.alert("The engine has opened in another tab, thank you for using this Hub!")
}}}
