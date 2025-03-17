import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function RandomNumber (arr) { //function to generate a random number
    return Math.floor(Math.random()* arr.length)
 }

function selectNumberArray (arr) {//function to select an aleatory number
  return arr[RandomNumber(arr)]
}

function excuseGenerator (arr1, arr2, arr3, arr4) { //function to generate the excuse
  return selectNumberArray(arr1) + " " + selectNumberArray(arr2) + " " + selectNumberArray(arr3) + " " + selectNumberArray(arr4);
}

document.getElementById("excuse").innerHTML = excuseGenerator(who, action, what, when);

};
