// 자릿수 더하기

// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24

// function solution(n) {
//     var answer = 0;

//     answer = n.toString().split("").reduce((prev, cur) => prev + Number(cur), 0)

//     return answer;
// }


function solution(n) {
    let result = 0;
    result = n.toString().split("").reverse().reduce((prev, cur) => prev + Number(cur), 0).join("")
    return result
}


function solution(n) {
    let result = ""
    result = String(n).split("").reverse()
    sum = result.reduce((prev, cur) => prev + Number(cur), 0)
    return `${result[0]} + ${result[1]} + ${result[2]} + ${result[3]} + ${result[4]} + ${result[5]} = ${sum}`
}
console.log(solution(718253))