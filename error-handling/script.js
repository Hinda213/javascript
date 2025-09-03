let missingNameError = new Error("Name can't be empty");
try {
    //open db
  let firstName = "Hinda";
  if (firstName == undefined) {
    throw missingNameError
  } else {
    firstName = firstName.toUpperCase();
    console.log(firstName);
  }
  console.log("I reached the end of the try block");
} catch (error) {
  console.log(missingNameError.message);
} finally {
    // close db
    console.log("error or not code in my block always runs");
}
