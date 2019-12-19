//IE < 10 pollify for requestAnimationFrame
window.requestAnimFrame = function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            callback()
        }
}();


$(document).ready(function () {

    $(".mainWrapper").fullpage({

        anchors: ["one", "two", "three"],

        menu: ".menu",


    });




});
document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
 
var people = document.getElementById('people');
var courses = document.getElementById('courses');
var coctails = document.getElementById('coctails');
var result = document.getElementById('result');

people.addEventListener("input", sum);
courses.addEventListener("input", sum);
coctails.addEventListener("input", sum);

function sum() {
  
var one = parseFloat(people.value) || 0;
var two = parseFloat(courses.value) || 0;
var three = parseFloat(coctails.value) || 0;
  
var add = one*two*100+one*three*100;

result.innerHTML = "Approximate ammount is : " + add;

}
});