function add(){
    let firstnumber = parseFloat( document.getElementById("num1").value);
    let secondnumber = parseFloat( document.getElementById("num2").value);
    let result = firstnumber + secondnumber;
    document.getElementById("result").innerHTML =  result;
}
function subtract(){
    let firstnumber = parseFloat( document.getElementById("num1").value);
    let secondnumber = parseFloat( document.getElementById("num2").value);
    let result = firstnumber - secondnumber;
    document.getElementById("result").innerHTML =  result;
}
function mutiply(){
    let firstnumber = parseFloat( document.getElementById("num1").value);
    let secondnumber = parseFloat( document.getElementById("num2").value);
    let result = firstnumber * secondnumber;
    document.getElementById("result").innerHTML =  result;
}
function Divided(){
    let firstnumber = parseFloat( document.getElementById("num1").value);
    let secondnumber = parseFloat( document.getElementById("num2").value);
    let result = firstnumber / secondnumber;
    document.getElementById("result").innerHTML =  result;
}
function squareroot(){
    let firstnumber = parseFloat( document.getElementById("num1").value);
    let result = Math.sqrt(firstnumber);
    document.getElementById("result").innerHTML =  result;
}
function power(){
    let firstnumber = parseFloat( document.getElementById("num1").value);
    let secondnumber = parseFloat( document.getElementById("num2").value);
    let result = Math.pow(firstnumber, secondnumber);
    document.getElementById("result").innerHTML =  result;
}