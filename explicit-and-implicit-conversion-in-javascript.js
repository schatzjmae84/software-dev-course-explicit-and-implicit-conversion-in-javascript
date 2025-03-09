/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);
console.log(typeof result);

let answer = String("5" - 2);
console.log("The result is: " + answer);
console.log(typeof answer);
/* In the example, JavaScript inplicitly converted the string "5" to a number before performing the operation. 
By using the String() function, Javascript will read 5-2 as a string, and still do the subtraction problem correctly.
*/

let isValid = Boolean(false);
if (isValid) {
    console.log("This is valid!");
}
console.log(typeof isValid);
/* In the example, JavaScript reads Boolean("false") as true because false is coded in a string, therefore making the output read "This is valid!"
By taking false out of a string, the Boolean() function now reads it as false, and there is no longer any output because false is not valid.
*/

let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
console.log(typeof age);
/* In the example, "25" is coded as a string.  When a number is made a string in an addition problem, JavaScript will just push the numbers together to create 255 instead of adding 25 and 5 together.
By converting the string "25" to a number with the Number() function, JavaScript will then read both 25 and 5 as numbers, add them together and output the correct answer of 30.
*/

/* Example of Implicit Type Conversion: Boolean Context - NaN converts to false and command will not run */
let springIsNice = Boolean(true);
if (NaN) {
  console.log("This is falsy.");
}
console.log(typeof springIsNice);

/* Example of Explicit Type Conversion: converting a string into a floating point number */
let heightOfKiddo = "3.5 feet";
console.log(parseFloat(heightOfKiddo));
console.log(typeof heightOfKiddo);

