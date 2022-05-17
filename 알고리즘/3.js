// 가운데 숫자 가져오기

// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// s	return
// "abcde"	"c"
// "qwer"	"we"



function solution(s) {
    var answer = '';
    if (s.length % 2 === 1) {
        answer = s[(s.length - 1) / 2]
    } else {
        answer = s[s.length / 2 - 1] + s[s.length / 2]
    }
    return answer;
}