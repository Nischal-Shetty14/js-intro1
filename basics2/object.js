const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas.lastName);
console.log(jonas['lastName']);//more flexible


const nameKey = 'Name';

console.log(jonas['first' + nameKey]); // Jonas
console.log(jonas['last' + nameKey]);  // Schmedtmann

const interestedIn = prompt(
  'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);//wont work in dot notation as it needs key which are existing in the object
} else {
  console.log('Wrong request!');
}

jonas.location = 'Portugal';        // dot
jonas['twitter'] = '@jonasschmedtman'; // bracket

