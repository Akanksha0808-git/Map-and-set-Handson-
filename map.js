  //Q1-------------------

  function removeDuplicates(str) {
    const charSet = new Set(str);
    return Array.from(charSet).join('');
  }
  
  // Example usage:
  const inputs = 'abcadeecfb';
  const output = removeDuplicates(inputs);
  console.log(output); // Output: "abcdef"
  
  
  
  //Q2------------  
     function countAlphabets(str) {
    const charMap = new Map();
  
    for (let char of str) {
      if (charMap.has(char)) {
        charMap.set(char, charMap.get(char) + 1);
      } else {
        charMap.set(char, 1);
      }
    }
  
    for (let [char, count] of charMap) {
      console.log(`${char}=${count}`);
    }
  }
  
  // Example usage:
  const input = 'abcadeecfb';
  countAlphabets(input)

  //Q2----------

