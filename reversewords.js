function reverseWords(str) {
  let newStr = [];
  let subStr = ' ';
  
  for (let i = str.length; i >= 0; i--) { //loops by letter from end of sentence
    if (str[i - 1] === ' ' || i === 0){ //every space (' ') sends a new reversed word to newStr array
      newStr.unshift(subStr);
      subStr = '';
    }
    subStr += str[i - 1];
  }
  return newStr.join('').trim();
}
