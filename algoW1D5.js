/***************************************************************************************************** */
/* 
  Recreate the built in .reverse method

  Given an array, alter the array in place to have all of it's elements reversed
  https://login.codingdojo.com/m/201/7911/54786 <-- hints on swapping values
*/

const arrA = ["a", "b", "c", "d", "e"];
const expectedA = ["e", "d", "c", "b", "a"];

const arrB = ["s", "l", "a", "p"];
const expectedB = ["p", "a", "l", "s"];

const arrC = ["k", "n", "i", "t", "s"];
const expectedC = ["s", "t", "i", "n", "k"];



/**
 * Reverses a given array in place
 * @param {Array<any>} items
 * @param {number} startIdx
 * @param {number} endIdx
 * @returns {Array<any>} The original array, altered to be reversed
 *    
 */
function reverse(items) {
    // code here
    var newArr = [];
    for (var i=items.length-1; i>=0; i--){
        newArr.push(items[i])
    }
    items=newArr
    return items
}

// Tests
console.log("\n************Algo #2***********");
console.log("A");
const test1 = reverse(arrA);
console.log(test1, "should be", expectedA); //tests return value
console.log(arrA, "should be", expectedA); //tests that original array was altered

console.log("\nB");
const test2 = reverse(arrB);
console.log(test2, "should be", expectedB);
console.log(arrB, "should be", expectedB);

console.log("\nC");
const test3 = reverse(arrC);
console.log(test3, "should be", expectedC);
console.log(arrC, "should be", expectedC);