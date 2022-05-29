var button = document.querySelector('button');
var input1 = document.getElementById("num1"); //typecasting in TS
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value)); //convert string to number
    //insert p tag with result into dom 
    var result = document.createElement('p');
    result.innerText = add(+input1.value, +input2.value).toString();
    //append result to dom below div
    document.querySelector('div').appendChild(result);
});
