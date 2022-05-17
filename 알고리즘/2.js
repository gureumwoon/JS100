// 짝수 홀수 가져오기

// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// num	return
// 3	"Odd"
// 4	"Even"

function solution(num) {
    var answer = '';
    if (num % 2 == 0) {
        return answer = "Even"
    } else {
        return answer = "Odd"
    }
    return answer;
}