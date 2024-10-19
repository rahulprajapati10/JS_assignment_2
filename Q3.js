
// Question 3. Find the maximum out of three numbers.

// Take three numbers and print the largest number among them if all of three are same print −1−1.
// Note: You have to complete Max_out_of_three. No need to take any input.
// Input Format
// The input contains three numbers A, B and C.
// Output Format
// Return the maximum number out of the three numbers as result.
// Constraints
// 1≤A, B, C≤10000
// Example
// Sample Input
// 2 5 4
// Sample Output
// 5

let A = 56
let B = 67
let C = 56

if(A > B && A > C){
    console.log(A);
}
else if(B > A && B > C){
    console.log(B);
}
else if(C > A && C > B){
    console.log(C);
}
else if(A === B && A === C && B === A && B === C && C === A && C ===B){
    console.log("-1-1");
}
else{
    console.log("Enter the number only");
}
