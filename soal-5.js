function getSplitName(namePerson) {
  if (typeof namePerson === "number") {
    return "harus huruf";
  } else {
    const bagiNama = namePerson.split(" ");
    if (bagiNama.length === 3) {
      return {
        firstName: bagiNama[0],
        middleName: bagiNama[1],
        lastName: bagiNama[2],
      };
    } else if (bagiNama.length === 2) {
      return {
        firstName: bagiNama[0],
        middleName: null,
        lastName: [bagiNama.length - 1],
      };
    } else if (bagiNama.length === 1) {
      return {
        firstName: bagiNama[0],
        middleName: null,
        lastName: null,
      };
    } else {
      return "tidak boleh lebih 3 huruf";
    }
  }
}

console.log(getSplitName(999));
