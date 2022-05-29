const button = document.querySelector('button')! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement; //typecasting in TS
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1:number, num2:number){ //type annotation in TS
    return num1 + num2;
}

button.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value)); //convert string to number
    //insert p tag with result into dom 
    const result = document.createElement('p');
    result.innerText = add(+input1.value, +input2.value).toString();
    //append result to dom below div
    document.querySelector('div')!.appendChild(result);
})
