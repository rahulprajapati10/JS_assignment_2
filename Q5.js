

// Question 5. Check whether the triangle is Acute or Obtuse

// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
// Note: You have to complete Triangle_Check. No need to take any input
// Input Format
// The input contains three numbers A, B and C which denotes the angles of a triangle.
// Output Format
// Return the required result.
// Constraints
// 0≤A, B, C≤180
// Example
// Sample Input
// 60 100 20
// Sample Output
// obtuse



let A = 20
let B = 60
let C = 100 

if(A<90 && B < 90 && C <90){
    
    console.log("Acute triangle");
}
else if(A<90 || B < 90 || C <90){
    console.log("Obtuse triangle");
}


// let sum_Of_two_Sides = A*A + B*B 
// let third_side = C*C

// if(sum_Of_two_Sides > third_side){
//     console.log("Acute triangle");
// }
// else if(sum_Of_two_Sides < third_side){
//     console.log("Obtuse Triangle");
// }
// else {
//     console.log("not a triangle");
// }
