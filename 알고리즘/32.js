// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.
// 입출력 예
// n	result
// 45	7
// 125	229
// 입출력 예 설명
// 입출력 예 #1

// 답을 도출하는 과정은 다음과 같습니다.
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 45	1200	0021	7
// 따라서 7을 return 해야 합니다.
// 입출력 예 #2

// 답을 도출하는 과정은 다음과 같습니다.
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 125	11122	22111	229
// 따라서 229를 return 해야 합니다.

// 풀이
function solution(n) {
    var answer = n.toString(3).split('').reverse().join('')
    return parseInt(answer, 3);
}

// n = 45
n.toString(3) // "1200"
n.toString(3).split('') // ["1","2","0","0"]
n.toString(3).split('').reverse() // ["0","0","2","1"]
n.toString(3).split('').reverse().join('') // "0021"
parseInt(answer, 3) // 7

// Number.toString([radix]) : 기수를 이용함으로써 10진수(정수)를 (1, 2, 3, 4, 5...) 다른 진수로 변환할 수 있다. 10진수(정수)만 변경 가능함

// String.split() : split 함수를 사용하면 특정 구분자를 기준으로 문자열을 분리하여 결과를 배열로 반환한다.

// Array.reverse() : 배열의 요소를 반대로 재배열 한다.

// Array.join() : join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.

// parseInt(string, radix) : string에 있는 문자열의 현재 진수를 radix에 입력하여
// 정수로 변경한다

// 내장함수 이용하지 않은 풀이

function solution(n) {
    const answer = [];
    while (n > 0) {
        const remainder = n % 3;
        tetra.push(remainder); // 나머지를 배열에 차례대로 넣어줌.
        n = Math.floor(n / 3); // 소수 값이 있을 때 소수 값을 버리는 역할
    }
    answer.reverse(); // answer ["0","0","2","1"] >> reverse ["1","2","0","0"]
    let sum = 0;
    for (let i = 0; i < tetra.length; i++) {
        sum += answer[i] * 3 ** i;
    }
    return sum;
}