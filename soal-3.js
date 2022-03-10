let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkEmail(email) {
  if (typeof email === "string") {
    if (email.match(emailFormat)) {
      return "Valid";
    } else {
      return "Invalid";
    }
  } else if (email === null) {
    return "Error: where is the parameter";
  } else {
    return "error : invalid data type";
  }
}

console.log(checkEmail("apranta@binar.co.id"));
