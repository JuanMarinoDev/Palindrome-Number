const isPalindrome = function(num) {
  let str1 = num.toString();
  let str2 = num.toString();
  let str2Array = [];
  for (let i = 0; i < str2.length; i++) {
    str2Array.push(str2[i]);
  }
  str2Array = str2Array.reverse();
  str2 = '';
  for (let i = 0; i < str2Array.length; i++) {
    str2 += str2Array[i];
  }
  return str1 == str2;
};

// Test ----> Expected output = true
console.log(isPalindrome(2002));