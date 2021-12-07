// add whatever parameters you deem necessary
function separatePositive(arr) {
  let start = 0;
  let end = arr.length - 1;
  while ( start < end ){
    if (arr[start] < 0){
      const v = arr[start];
      arr.push(v);
      arr.splice(start, 1);
      end--;
    } else {
      start ++;
    }
    if (arr[end] > 0){
      const v = arr[end];
      arr.splice(0, 0, v);
      arr.splice(end+1, 1);
      start++;
    } else {
      end--;
    }
  }
  return arr;
}
