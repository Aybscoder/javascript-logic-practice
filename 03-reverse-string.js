// ========================================
// Question 3: Reverse a String
// ========================================

const text = "JavaScript";

let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
}

console.log("Reversed String:", reversed);

// Expected Output:
// Reversed String: tpircSavaJ