// const add = (a, b) => {
//   if (typeof a === 'number' && (typeof b === 'number' || b === undefined) ) {
//     if (a && b) return a + b;
//     if (a) return a;
//   }
//   return 'niepoprawny parametr';
// };

// const add = (a=0, b=0) => {
//   if(isNaN(a) || isNaN(b)) {
//     return "niepoprawny parametr";
//   } else {
//     return a + b;
//   }
// };

// const add = (a = 0, b = 0) => typeof(a) === 'string' || typeof(b) === 'string' ? "niepoprawny parametr" : (a + b);

const add = (a, b = 0) => {
  const [desiredType, errorMessage] = ['number', 'niepoprawny parametr'];
  if (typeof a !== desiredType || typeof b !== desiredType) {
    return errorMessage;
  }
  return a + b;
};

// const add = (a = 0, b = 0) => {
//   if (typeof a === "number" && typeof b === "number") {
//     if (a && b) return a + b;
//     if (a) return a;
//   }
//   return "niepoprawny parametr";
// };

console.log('ADD should correctly add two number', add(5,5) === 10);
console.log('ADD should return param for single', add(5) === 5);
console.log('ADD should return string if second param isnt number', add(5, 'a') === 'niepoprawny parametr');
console.log('ADD should return string if first param isnt number', add('a', 5) === 'niepoprawny parametr');
console.log('ADD should return string if first and second params arent number', add('a', 'a') === 'niepoprawny parametr');
console.log('ADD should return string if available is one param type non number', add('a') === 'niepoprawny parametr');
console.log('ADD should return string if is non params', add() === 'niepoprawny parametr');
