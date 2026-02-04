## 1. Difference between var, let, and const

In JavaScript, var, let, and const are used to declare variables, but they behave differently.

var is the old way of declaring variables. It is function‑scoped, which means it is available throughout the function where it is declared. One problem with var is that it can be redeclared and updated anywhere, which can cause bugs. Because of this, var is not recommended in modern JavaScript.

let was introduced in ES6. It is block‑scoped, meaning it only works inside the block (like inside {}) where it is declared. You can change the value of a let variable, but you cannot redeclare it in the same scope. let is useful when you know the value will change.

const is also block‑scoped. Once a value is assigned to a const variable, it cannot be reassigned. This makes code safer and easier to understand. However, for objects and arrays declared with const, their contents can still be modified.

## 2. Difference between map(), forEach(), and filter()

These three methods are used with arrays, but they are used for different purposes.

map() is used when you want to transform or change each element of an array and get a new array as a result. For example, if you want to double all numbers in an array, map() is the best choice.

forEach() is used when you want to perform an action on each element of an array, such as printing values or updating something outside the array. It does not return a new array.

filter() is used when you want to select some elements from an array based on a condition. It returns a new array containing only the elements that satisfy the condition.

## 3. Arrow Functions in ES6

Arrow functions are a shorter and cleaner way to write functions in JavaScript. They were introduced in ES6 to make the code easier to read and write.

For example:
const add = (a, b) => a + b;


Arrow functions are especially useful because they do not have their own `this` keyword. This makes them very helpful when working with callbacks and modern JavaScript frameworks.


## 4. Destructuring Assignment in ES6

Destructuring assignment allows you to extract values from arrays or objects and store them into variables in a simple way.

For arrays, destructuring lets you assign values based on their position. For objects, it lets you extract values using property names. This feature reduces repetitive code and makes programs cleaner and more readable.

Example:
const user = { name: "Ali", age: 22 };
const { name, age } = user;

## 5. Template Literals in ES6

Template literals are used to create strings in a more readable and powerful way. They use backticks instead of quotes and allow variables and expressions to be written directly inside the string.

Example:

const name = "Ali";
const message = `Hello ${name}`;

Unlike traditional string concatenation using the `+` operator, template literals are easier to read and support multi‑line strings naturally. This makes them very useful when working with dynamic text.
