//내가 푼 방법
function solution(x, n) {
    var answer = [];
    for (let i = 1; i<=n; i++){
        answer.push(x*i)
    }
    return answer;
}
//타인이 푼 방법
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
    //fill 메서드는"배열의 시작 인덱스부터~끝 인덱스 이전까지"정적인 값 하나로 채우는 메소드
    //map 메서드는 "주어진 배열의 값들을 오름차순으로 접근해 새로운 값을 정의하고 신규 배열을 만들어 반환하는 메소드
}
