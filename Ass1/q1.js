const prompt=require("prompt-sync")()

const constarray=prompt("Enter thenumber of constarray:").split(',').map(Number)
// const constarray= constInput.split(',').map(Number)
console.log("constarray",constarray)


let letarray=prompt("Enter the number of letarray:").split(',').map(Number)
// let letarray=letInput.split(',').map(Number)
console.log("letarray",letarray)


constarray[3]=60;
constarray.push(30);
console.log("modified constarray:",constarray)

letarray[2]=40;
letarray.push(40);
console.log("Modified letarray:",letarray)
