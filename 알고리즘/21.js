// 이상한 문자 만들기


function solution(s) {
    var answer = [];
    const sen = s.split(" ")
    for (let i = 0; i < sen.length; i++) {
        answer.push(sen[i].split("").map((x, j) => j % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join(" "))
    }
    return answer.join(" ");
}

function toWeirdCase(s) {
    return s.split(' ').map((a) => {
        return a.split('').map((b, i) => {
            return (i % 2 === 0) ? b.toUpperCase() : b.toLowerCase();
        }).join('');
    }).join(' ');
}

function toWeirdCase(s) {
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}