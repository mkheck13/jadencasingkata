// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
// Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, 
// he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word,
// check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. 
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren'



// so we start with creating our own method 'toJadanCase'
// we are going to want to split the string up into an array of words, so we will use the .split() method
// we can use 'this' as a keyword to refer to the string which the method is called on
// next we will need to map thru the array of words we created, we'll use the .map() method for that
// we will need to make a function that will target each word in our array
// then we will need to target the first letter of the words in the array,
// we then need to capitalize the first letter
// to get the rest of the word with will use .slice() at the index of 1 as that will be the second letter to the end of the word
// then we join the words back into a string with .join()
String.prototype.toJadenCase = function () {
    return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
};