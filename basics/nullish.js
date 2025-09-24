/*FALSY-These evaluate to false when used in a boolean context:

false        // Boolean false
0            // Number zero
-0           // Negative zero
0n           // BigInt zero
""           // Empty string
null         // Null value
undefined    // Undefined value
NaN          // Not a number*/

/*TRUTHY-
"hello"      // Non-empty string
1            // Any non-zero number
-50          // Negative number
"0"          // String containing zero (still truthy)
"false"      // String "false" is truthy
[]           // Empty array
{}           // Empty object
function(){} // Any function
*/




//The nullish coalescing operator ?? is a logical operator in JavaScript that returns the right-hand side value only if the left-hand side is null or undefined.

function greet(user) {
  let name = user ?? "Anonymous";
  console.log(`Hello, ${name}`);
}

greet("Nischal");   // Hello, Nischal
greet(null);        // Hello, Anonymous
greet(undefined);   // Hello, Anonymous
greet("");          // Hello,  (empty string is truthy here)


