// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))
// ---> [
//   'B', 'r', 'a', 'v',
//   'o', ' ', '2', '0',
//   '2', '2'
// ]

// a) Your answer: the output will be the string inside of a array due to the .split method
// b) Verify and explain: I was partially correct because the string was placed into an array but also each letter was separated into its own index. If the .split method did not contain the quotes inside of parenthesis it would have not split the letters up into separate index's.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: 
  // This will log "Hello, LEARN student" because the console.log calls on the greeter method which places the string "LEARN student" into the parameter where it gets placed into the ${name}.
// b) Verify and explain: 
  // I was wrong! I am frustrated with my self because I immediately knew what the problem was when I saw the output as undefined. It was simply missing the return statement inside of the function before the `Hello, ${name}!`. If it did have the return it would have had an output of what I stated above. The ${} is called string interpolation which places the string in side of the curly braces instead of having to use + to add the strings together.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: 
  // Each number inside of the array should multiply by 2. The .map method iterates through each index and its value returning an array of the same length allow for the numbers to be multiplied.
// b) Verify and explain: 
  // I was correct the output was each number multiplied by 2. As I said above the .map high order function iterates through the array and multiplies each number. Using the arrow function allows us to reduce the code to less lines while the .map allows us to not have to write out a for loop.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: 
  // This should log only th odd number in a new array  because its function is stating to log only the number that do not have a remainder of 0 when using the modulo of 2. The filter method takes the array and logs a new one of the the elements that are truthy to the condition.
// b) Verify and explain: 
  //I was correct, onlyOdds when called logged only its odd numbers in its array, [ 11, 13, 15 ]. .filter as said before logs the elements inside the array that are odd. The bang operator ! states the opposite of the loose equal sign. !== means that if a value when divided by 2 does not have a remainder of zero log that to the console.

  

// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: 
  // This is calling on the languages key of the variable myCodingSkills and asking for the 0 index within the array. This should log JavaScript.
// b) Verify and explain: 
  // I was correct this logged JavaScript the console.log calls on the variable and uses dot notation and asks for the languages key and the 0th index within the languages key which is Javascript.



// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: 
  // This will log the class Learn with "George" as the students name, Bravo for the Cohort, and 2022 for the year.
// b) Verify and explain:
  // I was right, the output was Learn { student: 'George', cohort: 'Bravo', year: 2022 }. new creates a new instance of the class Learn and adds 'george' in as the students name.
