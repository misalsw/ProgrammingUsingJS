let n1 = Math.floor(Math.random()*900) + 100;
let n2 = Math.floor(Math.random()*900)+ 100;
let n3 = Math.floor(Math.random()*900)+ 100;
let n4 = Math.floor(Math.random()*900)+ 100;
let n5 = Math.floor(Math.random()*900)+ 100;

console.log("Five randoms are: " + n1 + " " + n2 + " " + n3 + " " + n4 + " " + n5)

let minValue = Math.min(n1, n2, n3, n4, n5);
let maxValue = Math.max(n1, n2, n3, n4, n5);

console.log("Minimum value is- "+ minValue);
console.log("Maximum value is- "+ maxValue);


