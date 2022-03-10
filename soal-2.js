// function checkNumber(givenNumber) {
//   const validasi = /^[0-9]+$/;
//   if (String(givenNumber).match(validasi)) {
//     console.log(givenNumber);
//     return givenNumber % 2 === 0 ? "Genap" : "Ganjil";
//   } else {
//     return "Invalid data type";
//   }
// }

const checkNumber = (givenNumber) => {
  if (Number.isInteger(givenNumber)) {
    return givenNumber % 2 === 0 ? "Genap" : "Ganjil";
  } else {
    return givenNumber === undefined
      ? "Error : Bro where is the parameter?"
      : "Error : Invalid data type";
  }
};

console.log(checkNumber(10));
console.log(checkNumber(3));
console.log(checkNumber("3"));
console.log(checkNumber({}));
console.log(checkNumber([]));
console.log(checkNumber());
