# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: 
    Parameter is put into something such as a function, letting the developer know what type of data the user is going to be inputting into that function. The argument is the actual data that the user inputs into the console that is ran through the function, expecting an output.

  Researched answer: 
    A parameter is a placeholder inside a function that describes the variable that is going to be passed through the function. However, in javascript the definition used to describe your parameters does not check for or specify the data type that will be passed as the argument. They are placed inside of the parenthesis of the function and can contain multiple parameters separated by commas. The argument is the real values that the parameter variables are asking for inputted by the user and passed through the function when invoked.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: 
    The required parameter of .map() is that it can only loop through a array. The optional parameters is that the elements inside the array are not limited to a single data type. Examples of the data that can be evaluated by the .map() method are booleans, strings, and numbers which can all be mixed together inside the array. 

  Researched answer:
    I was a bit of on my first answer. The there are 3 pre-defined parameters which are the value, index, and array. The required parameter is the value because in order for .map() to work it needs at least one argument. Calling on a specific index is optional because as default .map() will iterate through the array starting at index 0. Also, putting another array inside of the parameter is optional broadening the possibilities that method can perform.





3. What is the difference between map and filter?

  Your answer: 
    The method .map() iterates through an array returning a new array of the same length after it is invoked. While using .filter it will iterate through an array and pull out specified elements designated by the developer, returning them in new array.  

  Researched answer:
    .map() will iterate through each individual value in an array and returns a new array of the same length with the values changed to meet the condition of the function. While .filter() will only return the values that are truthy towards the condition you are asking for, so instead of changing the original array it just pulls the elements that are truthy out of the array an outputs them into a new one.



4. What is the difference between a function and a method?

  Your answer: 
    A function is what developers use to have the computer do certain tasks. A method on the other hand is also a function but a method can have more than one function inside of it.

  Researched answer:
    A function is a singular block of code that is designed by the developer to perform a particular task and can be called directly by it name. While methods are object oriented using it's function only when called by the name of its object and method name using dot notation. So for example, you could call on a function that multiples two values by 3 by just calling on its name and inputting two values in the parenthesis. While for the method you have to call on a objects name first following it with a .method().



5. What is object destructuring?

  Your answer:
    Object destructuring is taking a object and rearranging the contents to make it easier to access items and more understandable.

  Researched answer:
    destructuring is a way for developers to pull codes out of arrays, objects or methods and assigning the values to a new variable. For example if we had an object that had keys that described a car we could assign the keys that describe paint color engine size and model to a variable then log the key names which would output the keys values.



6. STRETCH: What is hoisting in JavaScript?

  Your answer:
   a process of moving code around to make it more efficient.

  Researched answer:
   is the process of moving variables, functions or classes to the top of the scope so that the execution of the code works properly. If variables that are being called are are below a console.log they will not be registered to the output because every thing flows from top to bottom. 


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: 
  Class inheritance is when we take a main class or parent class and use the attributes from that parent class which are usually typical for most child classes and use them to to start as as base to start describing the more unique child classes.

2. React:
  created by facebook react was created to build webpages in a more scalable and efficient way.

3. React state:
  lives inside the constructor method and stores data that decides how the component behaves such as being dynamic or not.

4. React lifecycle methods:
  there are three catagories of lifecycle methods which include mounting, updating, and unmounting. this is the cycle react goes through starting form when it first renders to the DOM to when it is removed for the DOM. 

5. DOM:
  the document object model, is the visual representation of code that you see on the web.
