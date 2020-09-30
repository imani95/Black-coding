// used in index.html on line 15

// ******* While loop and For loop tasks *******

// Use this randomNumber inside of the while/for loops to generate a random number
const randomNumber = Math.round(Math.random() * 10);














// ******* Loops and Array Methods task *******

// This array of objects is to be used in the final task of the session
// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;

  return personA > personB ? 1 : -1;
}
let sortPeople = people.sort(compare);
console.log(sortedPeople);
let names = [];
for(let i = 0; i < sortedPeople.length; i++) {
  names.push(sortedPeople[i].name);
}
console.log(names);



for(let i = 0; i <= 10; i++)
console.log(randomnumber);
}

for(let i = 0; i <= 10; i++)
console.log(Math.round(Math.random() • 10);

const fruit = ["Apple", "pear", "banana"]

const animals = ['cat', 'dog', 'fish', 'horse',]
animals.unshift( 'cow');
animals.push('eagle');
console.log(animals);("Added to front: " + animals);

animals.push("rat");
console.log("Added to end: "rat") ;



