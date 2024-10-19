

// Question 1.Find Grades

// Your school has the following grading system based upon the marks (M) obtained by a student:
//  If M≤10, the grade will be E.
//  If 11≥M≤20, the grade will be D.
//  If 21≥M≤30, the grade will be C.
//  If 31≥M≤40, the grade will be B.
//  If 41≥M≤50, the grade will be A.
// Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement.
// Note: You have to complete findGrades function. No need to take any input.
// Input Format
// The first and the only line of the input contain an integer M, representing the marks that your friend will enter in the grading system.
// Output Format
// Return the grade obtained by your friend.
// Constraints
// 0≤M≤50
// Example
// Sample Input
// 1
// Sample Output
// E


let Marks = 35

if (Marks <= 10) {
    console.log("E");
}
else if (Marks >= 11 && Marks <= 20 ) {
    console.log("D");
} 
else if(Marks >=21 && Marks <= 30){
    console.log("C");
}
else if(Marks >= 31 && Marks <= 40){
    console.log("B");
}
else if(Marks >= 41 && Marks <= 50){
    console.log("A");
}
else{
    console.log("Marks is invalid");
}