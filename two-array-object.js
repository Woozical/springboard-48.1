// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valArr) {
  const obj = {};
  for (let i = 0; i < keyArr.length; i++){
    // If val array is guaranteed truthy values, this can instead be written as:
    // obj[keyArr[i]] = valArr[i] || null
    obj[keyArr[i]] = (i <= valArr.length-1) ? valArr[i] : null;
  }
  return obj;
}
