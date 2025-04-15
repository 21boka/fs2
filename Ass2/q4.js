const prompt=require("prompt-sync")()

// const constarray=prompt("Enterthe array:").split(",").map(Number)
// console.log("original array:",constarray)

//  constarray[2]=40;
//  constarray.push(30);
//  console.log("new array:",constarray)

function new_added(arr,element){
    return arr.push(element)
}
const array=prompt("Enter the array:").split(',').map(Number)
console.log(array)
const push=Number(prompt("Enter the element do you want to push:"))
new_added(array,push)
console.log("Modified array:",(array))