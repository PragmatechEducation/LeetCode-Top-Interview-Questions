let num = [3, 2, 4];
let targ = 6;

function twoSum(nums, target) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] == target) {
        arr.push(i);
        arr.push(j);
      }
    }
  }
  console.log(arr);
  return arr;
}

twoSum(num, targ);
