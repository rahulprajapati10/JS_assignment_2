
// Question 4. Second Smallest

// You are given 3 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided 
// integers.
// Note: You have to complete findSndSmallest function. No need to take any input.
// Input Format
// The first and the only line of the input contains three space-separated integers X, Y, and Z, denoting the integers among which you 
// have to find the second smallest element.
// Output Format
// Return the second smallest integer among the three integers given to you.
// Constraints
// 1≤X, Y, Z≤500
// X! =Y! =, Y!=Z!=, X!=Z
// Example
// Sample Input
// 2 9 23
// Sample Output
// 9


let X = 90
let Y = 78
let Z = 89

if (X < Y && X < Z && Y > X && Y < Z) {
    console.log(Y);
}
else if (Y < X && Y < Z && Y < Z && Y > X) {
    console.log(X);
}
else if (Z < X && Z < Y && Z < X && Z > Y) {
    console.log(Z);
}
else if (X > Y && X < Z && Y < Z && Y < X) {
    console.log(X);
}
else if (X > Y && X > Z && Y < X && Y < Z) {
    console.log(Z);
}
else if (X < Y && X < Z && Y > X && Y > Z) {
    console.log(Z);
}
else if (X < Y && X > Z && Y > X && Y > Z) {
    console.log(X);
}
else if (X > Y && X > Z && Y > Z && Y < X) {
    console.log(Y);
}

else {
    console.log("enter three distinct integer");
}