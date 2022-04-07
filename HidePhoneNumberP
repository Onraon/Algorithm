//내가 푼 방법
function solution(phone_number) {
    var answer = '';
    for(let i=0; i<phone_number.length; i++){
        if(i<phone_number.length-4){
            answer = answer + "*"
        }else{
            answer = answer + phone_number[i]
        }
    }
    return answer;
}
//타인이 푼 방법
function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  //repeat 문자열을 반복한 값을 반환
  //slice 원본의 배열을 바꾸지 않고 출력
  return result;
}
