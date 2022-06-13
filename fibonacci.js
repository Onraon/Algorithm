function fibonacci(n) {

let newArr = [0, 1]; //리스트의 고정값 지정

let fib = (n) => {

//fib라는 값에 n의 구심점을 잡아

if (newArr[n] !== undefined) {

//호출한 위치가 비어있지 않다면

return newArr[n]; //n 에 해당하는 위치의 값을 출력

}

newArr[n] = fib(n - 1) + fib(n - 2); //n에 해당하는 리스트에 피보나치 적용

return newArr[n]; //위에서 작성한 값을 출력

};

return fib(n); //화살표 함수로 선언한 함수를 반환

}

console.log(fibonacci(20));
