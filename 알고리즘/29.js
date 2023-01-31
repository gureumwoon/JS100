// 문자열 내 마음대로 정의하기

// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
// 입출력 예
// strings	n	return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]
// 입출력 예 설명
// 입출력 예 1
// "sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

// 입출력 예 2
// "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.

// 내가 작성한 답 출력은 성공적으로 되는데 테스트는 실패라고 뜸ㅠㅠ
function solution(strings, n) {
    var answer = [];
    const answerSort = strings.map((a) => a[n]).sort()
    const answerSort2 = strings.map((a) => a[n + 1]).sort()

    for (let i = 0; i < answerSort.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            if (strings[j].length > 3 ? strings[j][n + 1] === answerSort2[i] : strings[j][n] === answerSort[i]) {
                answer.push(strings[j]);
            }
        }
    }
    return answer
}


// 다른 답

function solution(strings, n) {
    return strings.sort((a, b) => {
        // 인덱스 n번째 글자를 기준으로 오름차순 정렬
        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
        // 인덱스 n번째 글자가 같으면 사전순 정렬
        else return a > b ? 1 : -1;
    });
}

// 다른 답2
// localeCompare 메서드는 참조 문자열이 정렬 순서에서 앞 또는 뒤에 오는지 또는 주어진 문자열과 같은지를 숫자로 반환
'a'.localeCompare('b') // -1 , 
'b'.localeCompare('a') // 1
'c'.localeCompare('c') // 0

function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

// 다른 답3
// 내부 인덱스 값 앞에 붙이고 그걸 기준으로 정렬 + 앞에 붙인 값 제거
function solution(strings, n) {
    var answer = [];
    for (var i = 0; i < strings.length; i++) {
        var chu = strings[i][n];
        strings[i] = chu + strings[i];
    }
    strings.sort();
    for (var j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], "");
        answer.push(strings[j])
    }

    return answer;
}
