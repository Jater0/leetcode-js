/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {boolean}
 */
function isArrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

exports.isArrayEquals = isArrayEquals;