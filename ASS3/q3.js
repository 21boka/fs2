// function getEvenNumber(numbers:number[]): number[] {
//         return numbers.filter(num=>num % 2==0)
// }
// console.log(getEvenNumber([1,2,3,4,5,6,7,8,9]))
function getEvenNumber(numbers) {
    return numbers.filter(function (num) { return num % 2 == 0; });
}
console.log(getEvenNumber([1, 2, 3, 4, 5, 6, 7, 8]));
