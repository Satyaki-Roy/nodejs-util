/*
value parameter shall be an object
*/
function logToConsole(value) {
  // check value if it is an object
  if (value.constructor !== Object) {
    return console.log("Value shall be an object. Example:- '{variableName}'")
  }
  // Converting the name of the variable to string
  const variableName = Object.keys(value)[0];
  // Logging to console
  console.log(variableName, ":", value[variableName]);
}

module.exports = { logToConsole };
