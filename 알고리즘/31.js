// 

// 풀이

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        let numArr = []
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                numArr.push(i)
            }
        }
        answer += numArr.length % 2 === 0 ? i : -i
    }
    return answer;
}

// 다른 답

function solution(left, right) {
    var answer = 0;
    for (let i = 0; i <= right; i++) {
        if (Numver.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
}

// 제곱근이 정수이면 약수가 홀수라는 사실을 이용한 풀이다.
