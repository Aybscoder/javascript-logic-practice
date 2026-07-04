// ========================================
// Question 5: Remove Duplicate Values from an Array
// ========================================

const array3 = [2, 5, 3, 2, 8, 5, 1, 8, 4, 3];

const uniqueArray = [];

for (let i = 0; i < array3.length; i++) {
    if (!uniqueArray.includes(array3[i])) {
        uniqueArray.push(array3[i]);
    }
}

console.log("Array Without Duplicates:", uniqueArray);

// Expected Output:
// Array Without Duplicates: [2, 5, 3, 8, 1, 4]