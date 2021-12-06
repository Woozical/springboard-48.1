// add whatever parameters you deem necessary
function constructNote(message, letters) {
  const charCount =(str) => {
    if (typeof str !== "string") return {};
    const output = {};
    for (let char of str.toLowerCase()){
      if (/[A-Z0-9]/i.test(char)) output[char] = (output[char] + 1) || 1;
    }
    return output;
  }
  const f1 = charCount(message);
  const f2 = charCount(letters);

  for (let char of Object.keys(f1)){
    if (!(f1[char] <= f2[char])) return false;
  }

  return true;
}
