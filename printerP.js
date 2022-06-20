function solution(priorities, location) {//함수 선언

    var ranking = 0;//ranking은 0

    while (priorities.length) {//priorities의 길이만큼 반복
        if (priorities[0] < Math.max(...priorities)) {
            if (--location < 0) location = priorities.length - 1;
            priorities.push(priorities.shift())
        } else {
            ranking++;
            if (--location < 0) return ranking;
            priorities.shift()
        }
    }
}

const solution = (priorities, location) => {
  const newPrior = priorities.map((num, index) => ({
    index,
    num,
  }));

  const temp = [];

  while (newPrior.length) {
    const fNum = newPrior.shift();

    if (fNum.num >= Math.max(...newPrior.map((p) => p.num))) {
      temp.push(fNum);
    } else {
      newPrior.push(fNum);
    }
  }

  return temp.indexOf(temp.find((p) => p.index === location)) + 1;
};
