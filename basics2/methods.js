// ===== START ARRAY =====
const arr = [10, 20, 30];

console.log("Initial array:", arr);

// ===== PUSH (add to end) =====
arr.push(40);
console.log("After push(40):", arr);

// ===== POP (remove from end) =====
const popped = arr.pop();
console.log("Popped element:", popped);
console.log("After pop():", arr);

// ===== UNSHIFT (add to start) =====
arr.unshift(5);
console.log("After unshift(5):", arr);

// ===== SHIFT (remove from start) =====
const shifted = arr.shift();
console.log("Shifted element:", shifted);
console.log("After shift():", arr);

// ===== INCLUDES (check existence) =====
console.log("Includes 20?", arr.includes(20)); // true
console.log("Includes 100?", arr.includes(100)); // false

// ===== INDEXOF (find position) =====
console.log("Index of 20:", arr.indexOf(20)); // index
console.log("Index of 100:", arr.indexOf(100)); // -1
