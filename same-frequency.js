// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);
  if (str1.length !== str2.length) return false;
  const charCount =(str) => {
    if (typeof str !== "string") return {};
    const output = {};
    for (let char of str.toLowerCase()){
      if (/[A-Z0-9]/i.test(char)) output[char] = (output[char] + 1) || 1;
    }
    return output;
  }
  const f1 = charCount(str1);
  const f2 = charCount(str2);

  for (let key of Object.keys(f1)){
    if (f1[key] !== f2[key]) return false;
  }

  return true;
}
