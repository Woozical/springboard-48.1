// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
  let start = 0;
  let end = arr.length-1;
  while(start < end){
    const avg = (arr[start] + arr[end]) * 0.5;
    if (avg === targetAvg) return true;
    else if (avg > targetAvg) end--;
    else start++;
  }
  return false;
}
