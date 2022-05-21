// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const num1 = 15
// // Expected output: "15 is divisible by three"
// const num2 = 0
// // Expected output: "0 is divisible by three"
// const num3 = -7
// // Expected output: "-7 is not divisible by three"

//a describe method that lists the name of a function called divisibleByThree test.
describe("divisibleByThree", () => {
    // a test/it method, nested within the describe block, that in plain words, describes what that the function does.
    it("returns a string that tells you if the number is divisible by three", () => {
        const num1 = 15
// Expected output: "15 is divisible by three"
        const num2 = 0
// Expected output: "0 is divisible by three"
        const num3 = -7
// Expected output: "-7 is not divisible by three"
        //an expect method, nested within the test block, calling on the divisibleByThree function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(divisibleByThree(15)).toEqual("is divisible by three")
        expect(divisibleByThree(0)).toEqual("is divisible by three")
        expect(divisibleByThree(-7)).toEqual("is not divisible by three")
    })
})
// test had a GOOD failure.
// FAIL  ./code-challenges.test.js
// divisibleByThree
//   ✕ returns a string that tells you if the number is divisible by three (1 ms)

// ● divisibleByThree › returns a string that tells you if the number is divisible by three

//   ReferenceError: divisibleByThree is not defined

// b) Create the function that makes the test pass.

// Create a function called divisibleByThree

// Pseudo
// create a function named divisibleByThree 
    // the function is going to decide whether or not the number is divisible by three
    // the function will have a conditional if/else statement using, num % 3 === 0
    // return a string stating "is divisible by three" if true, and "is not divisible by three" if false.

const divisibleByThree = (num) => {
    if (num % 3 === 0) {
        return "is divisible by three"
    } else {
        return "is not divisible by three"
    }
}
    divisibleByThree()

    // Code passed.
    // PASS  ./code-challenges.test.js
    // divisibleByThree
    //   ✓ returns a string that tells you if the number is divisible by three (2 ms)


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//a describe method that lists the name of a function called capitalizeWords test.
describe("capitalizeWords", () => {
    // a test/it method, nested within the describe block, that in plain words, describes what that the function does.
    it("returns an array with all words capitalized", () => {

        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

        //an expect method, nested within the test block, calling on the divisibleByThree function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(capitalizeWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizeWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// test had a GOOD failure
// FAIL  ./code-challenges.test.js
// capitalizeWords
//   ✕ returns an array with all words capitalized (1 ms)

// ● capitalizeWords › returns an array with all words capitalized

//   ReferenceError: capitalizeWords is not defined

// b) Create the function that makes the test pass.

// create a function called capitalizeWords 
    // the function will return an array with all the words capitalized
    // use the .map method to filter through the arrays
    // the function will return the each sting in the array as uppercase using the .toUpperCase method
    // the function will start at the zero index of each string and stop at the first index
    
const capitalizeWords = (array) => {
    let eachString = array.map(string => {
        return string[0].toUpperCase() + string.substring(1)
    })
    return eachString
}

// PASS  ./code-challenges.test.js
// capitalizeWords
//   ✓ returns an array with all words capitalized (3 ms)

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of a function called firstVowel test.
describe("firstVowel", () => {
    // a test/it method, nested within the describe block, that in plain words, describes what that the function does.
    it("returns the index of the first vowel in a string", () => {

    const vowelTester1 = "learn"
// Expected output: 1
    const vowelTester2 = "academy"
// Expected output: 0
    const vowelTester3 = "challenges"
// Expected output: 2

        //an expect method, nested within the test block, calling on the firstVowel function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(firstVowel(vowelTester1)).toEqual([1])
        expect(firstVowel(vowelTester2)).toEqual([0])
        expect(firstVowel(vowelTester3)).toEqual([2])
    })
})
// received GOOD failure
// FAIL  ./code-challenges.test.js
// firstVowel
//   ✕ returns the index of the first vowel in a string (1 ms)

// ● firstVowel › returns the index of the first vowel in a string

//   ReferenceError: firstVowel is not defined


// b) Create the function that makes the test pass.

// Pseudo
// create a function called firstVowel
    // firstVowel will iterate through the letters in a string an output the index of the first vowel
    // the function will have a for loop that will stop at the strings length 
        // the loop will contain an if statement that looks for a vowel at  every index
        // once the condition is met the function will return the index of the first vowel

const firstVowel = (string) => {
    for (let i=0; i < string.length; i++){
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            return [i]
        }
    }
}

// code passes
// PASS  ./code-challenges.test.js
// firstVowel
//   ✓ returns the index of the first vowel in a string (2 ms)