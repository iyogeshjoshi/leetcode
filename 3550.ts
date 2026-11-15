function smallestIndex(nums: number[]): number {
  let sIndex = -1;

  for (let index = 0; index < nums.length; index++) {
    if (index === sum(nums[index])) {
      sIndex = index;
      break;
    }
  }

  return sIndex;
};

function sum(num: number) {
  let digits = `${num}`;

  if (digits.length == 1) return Number(digits);

  return digits.split('').reduce((a, b) => (Number(a) + Number(b)), 0)
}

console.log(smallestIndex([1, 3, 2])); // output: 2
console.log(smallestIndex([1,10,11]))  // output: 1
console.log(smallestIndex([1,2,3]))  // output: -1
