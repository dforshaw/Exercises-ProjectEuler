/*
Euler Problems - #2 Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the previous 
two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed 
four million, find the sum of the even-valued terms.
*/

var max = 4000000;

var fibNum_1 = 1;
var fibNum_2 = 0;
var fibNum = 0;
var fibSum = 0;

while (fibNum < max) {

    fibNum = fibNum_1 + fibNum_2;
    
    if (fibNum < max && fibNum % 2 === 0) { fibSum += fibNum; }
    
    fibNum_2 = fibNum_1;
    fibNum_1 = fibNum;
}

console.log(fibSum);