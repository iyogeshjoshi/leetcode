function arrayRankTransform(arr: number[]): number[] {
  const ranking: { [key: number]: number } = {};
  const response: number[] = [];
  let sortedArray = [...arr];
  sortedArray = sortedArray.sort((a: number, b: number) => a - b);
  let rank = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && sortedArray[i - 1] !== sortedArray[i]) {
      ranking[sortedArray[i]] = ++rank;
    } else {
      ranking[sortedArray[i]] = i == 0 ? ++rank : rank;
    }
  }

  console.log(sortedArray);

  arr.forEach((value) => {
    response.push(ranking[value]);
  });

  return response;
}

// console.log(arrayRankTransform([40,10,20,30])) // [4,1,2,3]
// console.log(arrayRankTransform([100, 100, 100])) // [1, 1, 1]
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])); // [5,3,4,2,8,6,7,1,3]
