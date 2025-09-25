const nums=[1,2,3,4,5,6,7]
const newnum=nums.filter((num)=>num>4)
console.log(newnum)

const mapnum=nums.map((num)=>num+10)
console.log(mapnum)

const multi=nums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>40)

console.log(multi)
//reduce-reduces array down to single value 
const myNums = [1, 2, 3];

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal); // Output: 6
/*| Step | `acc` (Total so far) | `curr` (Current number) | `acc + curr` |
| ---- | -------------------- | ----------------------- | ------------ |
| 1    | 0                    | 1                       | 1            |
| 2    | 1                    | 2                       | 3            |
| 3    | 3                    | 3                       | 6            |
*/
//array.reduce(callbackFunction, initialValue);
//callback(accumulator, currentValue)
/*The first argument is always the accumulator → stores the result so far.

The second argument is the current value from the array.

The initialValue (like 0) sets the first value of accumulator.*/