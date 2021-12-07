// add whatever parameters you deem necessary
function countPairs(arr, target) {
  let pairCount = 0;
  let toExamine = new Set(arr);
  for (let num of arr){
    toExamine.delete(num);
    if (toExamine.has(target - num)){
      pairCount++;
    }
  }
  return pairCount;
}
