/*
Euler Problems - #1

If we list all the natural numbers below 10 that are multiples  
of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var max = 1000;
var threes = Array();
var fives = Array();
var sum = 0;

for (i=0; i < max; i++) {
    if (i % 3 === 0) {
        threes.push(i);
    } else if (i % 5 === 0){
        fives.push(i);
    }
}

for (j=0; j < threes.length; j++) {
    sum += threes[j];
}

for (k=0; k < fives.length; k++) {
    sum += fives[k];
}

console.log(sum);