// 18. 평균 점수

//영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

//공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
//**단, 소숫점 자리는 모두 버립니다.**

// 국, 수, 영 점수의 합을 구함.
// 구한 합을 3으로 나눠줌
// 소수점 버림

// const subject = [20, 30, 40];
// let sum = 0;

// for (let i of subject) {
//     sum += i;
// }

// console.log(sum / 3); <-- 내 답

const scores = prompt("세 과목의 점수를 입력하세요.").split("");
let sum = 0;

for (let i = 0; i < 3; i++) {
    sum += parseInt(scores[i], 10);
}

console.log(MAth.floor(sum / 3));