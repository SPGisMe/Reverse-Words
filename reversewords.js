function reverseWords(str) {
  let newStr = [];
  let subStr = ' ';
  
  for (let i = str.length; i >= 0; i--) {
    if (str[i - 1] === ' ' || i === 0){
      newStr.unshift(subStr);
      subStr = '';
    }
    subStr += str[i - 1];
  }
  return newStr.join('').trim();
}
