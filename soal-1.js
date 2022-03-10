function changeWord(selectedText, changeText, text) {
  const replace = text.replace(selectedText, changeText);
  return replace;
}

// // function changeWord(selectedText, changeText, text) {
// //   const loop = [text].map((e) => {
// //     return e.split(selectedText).join(changeText);
// //   });
// //   return loop;
// }

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));

// const newKalimat1 = changeWord("mencintai", "membenci", kalimat1);
// console.log(newKalimat1.toString());
// const newKalimat2 = changeWord("bromo", "semeru", kalimat2);
// console.log(newKalimat2.toString());
