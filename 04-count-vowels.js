// ========================================
// Question 4: Count the Number of Vowels in a String
// ========================================

const sentence = "Learning JavaScript is fun";

const vowels = "aeiouAEIOU";

let count = 0;

for (let char of sentence) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log("Vowel Count:", count);

// Expected Output:
// Vowel Count: 8