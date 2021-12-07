// add whatever parameters you deem necessary
function isSubsequence(subStr, searchStr) {
  let validCount = 0;
  let subPointer = 0;
  let searchPointer = 0;
  while (subPointer < subStr.length && searchPointer < searchStr.length){
    if (subStr[subPointer] === searchStr[searchPointer]){
      validCount++;
      subPointer++;
      searchPointer++;
    } else {
      searchPointer++;
    }
  }
  return validCount === subStr.length;
}
