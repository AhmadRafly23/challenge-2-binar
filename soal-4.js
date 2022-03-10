function isValidPassword(email) {
  const validasi = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  if (String(email).match(validasi)) {
    return true;
  } else if (typeof email === "number") {
    return "Error: Kok cuma angka";
  } else if (email === undefined) {
    return "Error : Jangan kosongan";
  } else {
    return false;
  }
}

console.log(isValidPassword(7777));
