"use strict";
// let id = Symbol("id");
// const alsoHuge = BigInt(9007199254740991);

// let age = 23;
// let str = `My age is ${age}`;

// let str1 = "My name is Ulugbek";
// let str2 = "My name is Ulugbek";

// let symbol = Symbol("id");
// let bigInt = BigInt("23232432434543");
// let num1 = 12;
// let num2 = 12;

// let obj1 = {
//   name: "Ulugbek",
// };

// let obj2 = {
//   name: "Ulugbek",
// };
// // (obj.name = "Ali"),
// console.log(obj1.name === obj2.name);

// console.log(typeof number);
// let age = 23;
// console.log(Boolean("false"));

/* Function declaration */
// function kvadrat(son1, son2) {
//   return son1 * son2;
// }
// console.log(kvadrat(12, 3));

/* Function expression */

// const kvadrat = function (son1, son2) {
//   return son1 + son2;
// };
// console.log(kvadrat(1, 4));

/* Arrow function */

// const kvadrat = (son) => console.log(son * son);

// console.log(kvadrat(3));
// kvadrat(4);

// const print = () => console.log("Printing...");

// print();

// const languages = ["js", "java", "go"];

// const languages = new Array("js", "java", "go");

// console.log(languages);

// const arr = [1, 2, 3, 4, 5];
// arr.shift();
// console.log(arr.shift());
// const name = "Ulug'bek";
// console.log(name);

// let age = "2022";
// console.log(Number(age));
// console.log(String(age));

/* Falsy qiymatlar */
// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));

// Truthy qiymatlar
// console.log(Boolean("Ulugbek"));
// console.log(Boolean(23));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean("0"));
// console.log(Boolean("false"));
// kvadrat(8);

// function kvadrat(son) {
//   console.log(son * son);
// }

// kvadrat(3);
// let result = kvadrat(2);
// console.log(result);

// const kvadrat = function (son) {
//   return son * son;
// };
// console.log(kvadrat(2));

// function evenOrOdd(number) {
//   let result;
//   if (number % 2 === 0) {
//     result = `Berilgna ${number} juft`;
//   } else {
//     result = `Berilgan ${number} toq`;
//   }
//   return result;
// }

// console.log(evenOrOdd(321));

// const evenOrOdd = (num) => {
//   return num % 2 === 0 ? `${num} juft son` : `${num} toq son`;
// };

// console.log(evenOrOdd(31));

const reverseFun = (num) => {
  const numStr = String(num);
  return numStr.split("").reverse().join("");
};

console.log(reverseFun(12));
