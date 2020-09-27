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

export const add = (a, b = 0) => {
  const [desiredType, errorMessage] = ['number', 'niepoprawny parametr'];
  if (typeof a !== desiredType || typeof b !== desiredType) {
    return errorMessage;
  }
  return a + b;
};

export const sub = (a,b) => a - b;

// const add = (a = 0, b = 0) => {
//   if (typeof a === "number" && typeof b === "number") {
//     if (a && b) return a + b;
//     if (a) return a;
//   }
//   return "niepoprawny parametr";
// };

