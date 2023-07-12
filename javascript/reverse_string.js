function reverseString(str) {

  const new_string = []

  for (let i=0; i < str.length; i++) {
      new_string[str.length-i] = str[i]
  }

  return new_string.join("")
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// get length of the string 
// go through the string, for each letter in the string --> add it to a new list
// make its position at whatever the len of the string is minus its current position or index 
// join the list and return the new string 

