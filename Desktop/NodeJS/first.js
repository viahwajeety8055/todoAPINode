// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// function myListener(a, b) {
//   console.log(a, b);
// }
// myEmitter.on("event", myListener);

// myEmitter.emit("event", "a", "b"); // This will trigger myListener and log "a b".
// myEmitter.emit("event", 4, 0); // This will trigger myListener and log "4 0".

// myEmitter.removeListener("event", myListener); // Listener is removed here.

// myEmitter.emit("event", 9, 1); // This should NOT trigger myListener, as it was removed.

// // At this point, myListener should not be called.

// function outerFunction() {
//   let outer = 2;
//   return function innerFunction(value) {
//     console.log(outer, value);
//   };
// }

// Closure example

// function createCounter() {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

// function createMultiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// const double = createMultiplier(5);
// console.log(double(4));

// const obj = { x: 42 };

// function getX() {
//   return this.x;
// }

// const boundGetX = getX.bind(obj);

// console.log(boundGetX()); // Outputs: 42

// console.log(boundGetX);

// const a = "Hello, How are you";

// console.log(a.startsWith("Hello"));

// const b = ["apple", "banana", "orange"];

// // for (let a of b) {
// //   if (a == "orange") {
// //     console.log(a);
// //     return;
// //   }
// //   console.log(a);
// // }

// console.log(b.find("apple"));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// for (let x of keys) {
//   console.log(x);
// }

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(first);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//   console.log(x);
// }

// const arrow = () => {
//   console.log("Welcome to world");
// };

// arrow();

// let normal = function () {
//   return "Welcome to normal function";
// };

// console.log(normal());

// let object = {
//   name: "Vishwajeet",
//   gf: function () {
//     const self = this;
//     console.log(" I am from arrow" + this.name);
//     (() => {
//       console.log(self.name);
//     })();
//   },
//   gd() {
//     console.log("I am from normal function" + this.name);
//   },
// };

// object.gf();
// object.gd();

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done");
//   }, 2000);
//   reject("rejected");
// });

// promise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const fetchDatad = () => {
  return new Promise((resolve, reject) => {
    const data = "";
    if (data) resolve(data);
    else reject("Error data is not exist");
  });
};

// fetchData()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const fetchData = async () => {
//   let data;
//   try {
//     data = await fetchDatad();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
//   return data;
// };

// fetchData()
//   .then((reponse) => {
//     console.log(reponse + "I from then");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Error handling

// function check() {
//   return 5 / 0;
// }

// try {
//   const data = 5 / 0; // This does not throw an error; it results in Infinity.
// } catch (error) {
//   console.error("There is some error"); // This block will not be executed.
// }

// try {
//   const denominator = 0;
//   if (denominator === 0) {
//     throw new Error("Division by zero is not allowed.");
//   }
//   const data = 5 / denominator;
// } catch (error) {
//   console.error("Error:", error.message); // This block will catch the custom error.
// }

async function fetchData() {
    try {
      const response = await fetch("https://example.com/data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
