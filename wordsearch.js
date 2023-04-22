// letters - 2D array
// word - word to be found in the grid

const wordSearch = (letters, word) => {
  // if the "letters" argument is not an array or is an empty array,
  // this will throw an error
  if (!Array.isArray(letters) || letters.length === 0) {
    throw new Error("Please provide a valid array.");
  }

  // the "horizontalJoin" variable is created by using the "map"
  // method on the "letters" array
  // "map" creates a new array called "horizontalJoin", where each
  // sub-array in "letters" is joined together into a single string
  // so "horizontalJoin" is an array of strings representing the
  // rows of letters
  // the "ls" variable represents each sub-array of characters
  // (i.e. each row of letters) in the "letters" array
  const horizontalJoin = letters.map((ls) => ls.join(""));

  // the "verticalJoin" variable is created by using the "map" method
  // on the first sub-array of "letters"
  // "map" iterates over the columns of letters and then joins
  // together the characters in each column
  // the "col" variable represents each character in the first
  // sub-array of "letters", and the "i" variable represents its index
  // the "map" method is called again on the "letters" array, but this
  // time it returns the character at the "i" index of each sub-array
  // (i.e. each row of letters)
  // then, all of those characters are joined together into a single
  // string
  const verticalJoin = letters[0].map((col, i) =>
    letters.map((row) => row[i]).join("")
  );

  // the spread operator is used to combine the "horizontalJoin"
  // and "verticalJoin" arrays,
  // which allows us to iterate over all of the rows and columns
  // of letters in a single loop
  // the "for" loop iterates over each string in the "horizontalJoin"
  // and "verticalJoin" arrays (which contain all of the rows and
  // columns of letters as strings)
  // for each string, it checks whether the "word" argument is
  // included in the string using the "includes" method
  // if it is, the function returns true
  for (l of [...horizontalJoin, ...verticalJoin]) {
    if (l.includes(word)) return true;
  }
  return false;
}

module.exports = wordSearch

