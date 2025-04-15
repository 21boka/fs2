const prompt=require("prompt-sync")();

// const num1=Number(prompt("Enter a num1: "));
// const num2=Number(prompt("Enter a num2: "));

// const sum=num1+num2;
// console.log("sum is:",sum)


function add(a,b){
    return a+b;
}
const num1=Number(prompt("Enter num1:"))
const num2=Number(prompt("Enter num2:"))

const sum=add(num1,num2)
console.log(add(num1,num2))