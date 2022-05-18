function solution(priorities, location) {

    var ranking = 0;

    while (priorities.length) {
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
