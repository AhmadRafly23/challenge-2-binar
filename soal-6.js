const char = [1, 1, 2, 3, 3, 5, 5];
function getAngkaTerbesarKedua(char) {
  const newChar = char.filter((item, index) => {
    return char.indexOf(item) === index;
  });
  return newChar[newChar.length - 2];
}
console.log(getAngkaTerbesarKedua(char));
