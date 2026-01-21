


//variables in javascript
//var, const, let

var fullName = "John";
console.log(fullName);

var age = 30;
console.log("The age is" + age);

fullName = "Jane";
console.log(fullName);

let city = "New York";
console.log(city);

let city2;
city2 = "Los Angeles";
console.log(city2);

const PI = 3.14;
console.log(PI);

let a  = 10;
let b = 5;

let sum = a + b;

let quotient = a / b;
console.log("The sum is: " + sum);

let product = a * b;
console.log("The product is: " + product);

let difference = a - b;
console.log("The difference is: " + difference);

let remainder = a % b;
console.log("The remainder is: " + remainder);

document.write("<br> remainder " + remainder);

let c = 10;
c += 5;
console.log("The value of c is: " + c);
 
c *= 2;
console.log("The value of c is: " + c);

c -= 5; 
console.log("The value of c is: " + c);

c /= 3;
console.log("The value of c is: " + c);

c %= 4;
console.log("The value of c is: " + c);

console.log("comare 5 and 3");
console.log(5==3); //vaues same or not
console.log(5!=3);//are values dif or not
console.log(5>3); //5 is greater than 3
console.log(5<3); //5 is less than 3
console.log(5>=3);//5 is greater than or equal to 3
console.log(5<=3);//5 is less than or equal to 3

console.log("Comparison '5 and 5");
console.log(5==5);
console.log(5===5); //value and type both are same
console.log(5!=5);

//logical expressions
let a1 = true;
let b1 = false;

console.log("logical AND");
console.log(a1 && b1); //false
console.log(a1 ||  b1); //true
console.log(!a1); //false
console.log(!b1); //true

//data types
let num = 10;
console.log("The value of num is: " + num);
console.log("The type of num is: " + typeof num);
let de = 10.5;
console.log("The value of de is: " + de);
console.log("The type of de is: " + typeof de);

//strings
let str = "Hello, World!";
console.log("The value of str is: " + str);
console.log("The type of str is: " + typeof str);

let str1 = 'JavaScript is fun!';
console.log("The value of str1 is: " + str1);
console.log("The type of str1 is: " + typeof str1);

let str2 = `back backtack`;
console.log("The value of str2 is: " + str2);
console.log("The type of str2 is: " + typeof str2);

let firtsName = "John";
console.log(`My first name is: ${firtsName}`); //template literals

//boolean
let isJavaScriptFun = true;
console.log("The value of isJavaScriptFun is: " + isJavaScriptFun);
console.log("The type of isJavaScriptFun is: " + typeof isJavaScriptFun);

let asd;

//null  
let nullVar = null;
console.log("The value of nullVar is: " + nullVar);
console.log("The type of nullVar is: " + typeof nullVar);

//symbol
let sym = Symbol("unique");
console.log(sym);

//bigInt
let bigIntNum = bigIntNum(32564253564543456245);
console.log("The value of bigIntNum is: " + bigIntNum);
console.log("The type of bigIntNum is: " + typeof bigIntNum);

//ternary (if then)
let age2 = 16;
let canVote = (age2 >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);

//urnary
let num2 = 5;
console.log("The value of num2 is: " + ++num2);

let num3 = 5;
console.log("The value of num2 is: " + num3++);
console.log("The value of num2 is: " + num3);

let num4 = 5;
console.log("The value of num2 is: " + --num4);

let num5 = 5;
console.log("The value of num2 is: " + num5--);
console.log("The value of num2 is: " + num5);

//bitwise operators
let x = 5;  // 0101 in binary
let y = 3;  // 0011 in binary
let z = x & y;
console.log(z);
z = x | y;
console.log(z);
z = x ^ y;
console.log(z);
z = ~x;
console.log(z);
z = x << 1;
console.log(z);
z = x >> 1;
console.log(z);
z = x ^ y;








