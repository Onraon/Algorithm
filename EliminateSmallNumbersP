function solution(arr) {
  if (arr.length <= 1) return [-1];
  let min;
  arr.reduce((acc, cur) => min = cur > acc ? acc : cur);
  return arr.filter(e => e !== min);
}

console.log(solution([4,3,2,1]));
console.log(solution([10]));
