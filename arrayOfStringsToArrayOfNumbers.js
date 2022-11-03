/**
 * This function takes an array of strings and casts it to an array of numbers
 * @param {*} stringarray Array of strings
 * @returns Array of numbers
 */
function toNumberArray(stringarray){
    return stringarray.map(num => Number(num))
  }