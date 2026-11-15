/**
 *
 * You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

 Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.



 Example 1:

 Input: nums = [1,1,4,2,3], x = 5
 Output: 2
 Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
 Example 2:

 Input: nums = [5,6,7,8,9], x = 4
 Output: -1
 Example 3:

 Input: nums = [3,2,20,1,1,3], x = 10
 Output: 5
 Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.
 */
function minOperations(nums: number[], x: number): number {
  let length = nums.length - 1;
  let operations = 0;
  let X = x;

  if (length === 0) return nums[0] === X ? 1 : -1;

  while (X > 0 && nums.length > 0) {
    console.log(`inside while, x=${X}, operations=${operations}, nums=${nums}`);
    if ((nums[0] >= nums[length] && nums[0] <= X) || nums[0] === X) {
      const deduct = nums.shift();
      X = X - deduct;
      length--;
      console.log(`inside if X=${X}, deduct=${deduct}`);
    } else if ((nums[length] > nums[0] && nums[length] <= X) || (nums[length] <= X && nums[length] < nums[0])) {
      const deduct = nums.pop();
      X = X - deduct;
      length--;
      console.log(`inside else if, X=${X}, deduct=${deduct}`);
    } else if (nums[0] > X && nums[length] > X) break;
    operations++;
  }

  return X == 0 ? operations : -1;
}

// console.log(minOperations([1,1,4,2,3], 5)) // output: 2
// console.log(minOperations([5,6,7,8,9], 4)) // output: -1
// console.log(minOperations([3,2,20,1,1,3], 10)) // output: 5
// console.log(minOperations([1,1], 3)) // output: -1
// console.log(minOperations([6016,5483,541,4325,8149,3515,7865,2209,9623,9763,4052,6540,2123,2074,765,7520,4941,5290,5868,6150,6006,6077,2856,7826,9119], 31841)) // output: 6
console.log(
  minOperations(
    [
      5207, 5594, 477, 6938, 8010, 7606, 2356, 6349, 3970, 751, 5997, 6114, 9903, 3859, 6900, 7722, 2378, 1996, 8902,
      228, 4461, 90, 7321, 7893, 4879, 9987, 1146, 8177, 1073, 7254, 5088, 402, 4266, 6443, 3084, 1403, 5357, 2565,
      3470, 3639, 9468, 8932, 3119, 5839, 8008, 2712, 2735, 825, 4236, 3703, 2711, 530, 9630, 1521, 2174, 5027, 4833,
      3483, 445, 8300, 3194, 8784, 279, 3097, 1491, 9864, 4992, 6164, 2043, 5364, 9192, 9649, 9944, 7230, 7224, 585,
      3722, 5628, 4833, 8379, 3967, 5649, 2554, 5828, 4331, 3547, 7847, 5433, 3394, 4968, 9983, 3540, 9224, 6216, 9665,
      8070, 31, 3555, 4198, 2626, 9553, 9724, 4503, 1951, 9980, 3975, 6025, 8928, 2952, 911, 3674, 6620, 3745, 6548,
      4985, 5206, 5777, 1908, 6029, 2322, 2626, 2188, 5639,
    ],
    565610,
  ),
); // output: 113
