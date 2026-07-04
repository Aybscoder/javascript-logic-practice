// ========================================
// Question 1: Find the Largest Number in an Array
// ========================================

const array1 = [12, 45, 7, 89, 23, 56, 91, 18];

let largest = array1[0];

for (let i = 1; i < array1.length; i++) {
    if (array1[i] > largest) {
        largest = array1[i];
    }
}

console.log("Largest Number:", largest);

// Expected Output:
// Largest Number: 91