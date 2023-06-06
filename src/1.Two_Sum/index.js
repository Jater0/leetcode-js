const { isArrayEquals } = require('../tools/index');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
      for (let j = i+1; j < length; j++) {
          if (nums[i] + nums[j] === target) return [i, j]
      }
  }
};

const models = [{
  nums: [2, 7, 11, 17],
  target: 9,
  output: [0, 1]
}];


function main() {
  for (const model of models) {
    console.log(isArrayEquals(twoSum(model.nums, model.target), model.output));
  }
}

main();